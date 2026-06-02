import { useCallback, useState } from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const OPENAI_API_KEY = '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';



export type PlaceSuggestion = {
  place: string;
  category: string;
  city: string;
  country: string;
  confidence: string;
  lat: number;
  lng: number;
  reason: string;
};

export type LocationSuggestionResponse = {
  query: string;
  places: PlaceSuggestion[];
};

export type LinkMetadata = {
  platform: string;
  title: string;
  description: string;
  image: string;
  pageText: string;
};

const decodeHtmlEntities = (text = '') => {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2026;/g, '…')
    .replace(/&#xfe0f;/g, '')
    .replace(/&#x1f327;/g, '🌧️')
    .replace(/&#x1f3d4;/g, '🏔️')
    .replace(/&#x1f4f2;/g, '📲')
    .trim();
};

const detectPlatform = (url: string) => {
  const lower = url.toLowerCase();

  if (lower.includes('youtube.com') || lower.includes('youtu.be')) {
    return 'youtube';
  }

  if (lower.includes('instagram.com')) {
    return 'instagram';
  }

  if (lower.includes('tiktok.com')) {
    return 'tiktok';
  }

  if (lower.includes('facebook.com') || lower.includes('fb.watch')) {
    return 'facebook';
  }

  if (lower.includes('x.com') || lower.includes('twitter.com')) {
    return 'twitter';
  }

  return 'website';
};

const getYouTubeVideoId = (url: string) => {
  const patterns = [
    /youtube\.com\/shorts\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&/]+)/,
    /youtu\.be\/([^?&/]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
};

const getMetaContent = (html: string, property: string) => {
  const regex = new RegExp(
    `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`,
    'i',
  );

  const match = html.match(regex);

  return decodeHtmlEntities(match?.[1] || '');
};

const getTitleFromHtml = (html: string) => {
  const match = html.match(/<title[^>]*>(.*?)<\/title>/i);

  return decodeHtmlEntities(match?.[1]?.replace(/\s+/g, ' ').trim() || '');
};

const canSendImageToOpenAI = (imageUrl: string) => {
  if (!imageUrl) return false;

  const cleanUrl = decodeHtmlEntities(imageUrl).toLowerCase();

  if (cleanUrl.includes('cdninstagram.com')) return false;
  if (cleanUrl.includes('fbcdn.net')) return false;
  if (cleanUrl.includes('tiktokcdn')) return false;

  return cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://');
};

const normalizePlaces = (places: any[]): PlaceSuggestion[] => {
  if (!Array.isArray(places)) return [];

  return places.map(item => ({
    place: String(item.place || ''),
    category: String(item.category || ''),
    city: String(item.city || ''),
    country: String(item.country || ''),
    confidence: String(item.confidence || '0%').includes('%')
      ? String(item.confidence || '0%')
      : `${item.confidence || 0}%`,
    lat: Number(item.lat || 0),
    lng: Number(item.lng || 0),
    reason: String(item.reason || ''),
  }));
};

export const useGetLocations = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<LocationSuggestionResponse | null>(
    null,
  );
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLinkMetadata = useCallback(async (input: string) => {
    const isUrl = /^https?:\/\//i.test(input);
    const platform = isUrl ? detectPlatform(input) : 'manual_text';

    const linkMetadata: LinkMetadata = {
      platform,
      title: isUrl ? '' : input,
      description: '',
      image: '',
      pageText: '',
    };

    if (!isUrl) {
      return linkMetadata;
    }

    if (platform === 'youtube') {
      const videoId = getYouTubeVideoId(input);

      if (videoId) {
        linkMetadata.image = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    }

    try {
      const response = await axios.get(input, {
        timeout: 10000,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
        },
      });

      const html = String(response.data || '');

      linkMetadata.title =
        getMetaContent(html, 'og:title') ||
        getMetaContent(html, 'twitter:title') ||
        getTitleFromHtml(html);

      linkMetadata.description =
        getMetaContent(html, 'og:description') ||
        getMetaContent(html, 'twitter:description') ||
        getMetaContent(html, 'description');

      linkMetadata.image =
        linkMetadata.image ||
        getMetaContent(html, 'og:image') ||
        getMetaContent(html, 'twitter:image');

      linkMetadata.pageText = decodeHtmlEntities(
        html
          .replace(/<script[\s\S]*?<\/script>/gi, '')
          .replace(/<style[\s\S]*?<\/style>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, 2500),
      );
    } catch (err) {
      linkMetadata.pageText =
        'Metadata could not be fetched. Link may be private, blocked, login-protected, or anti-bot protected.';
    }

    return linkMetadata;
  }, []);

  const getLocations = useCallback(
    async (inputValue: string): Promise<LocationSuggestionResponse> => {
      try {
        setLoading(true);
        setError(null);
        setLocations(null);
        setMetadata(null);

        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
          throw new Error('Input value is required');
        }

        if (!OPENAI_API_KEY) {
          throw new Error('OPENAI_API_KEY missing in react-native-config');
        }

        const isUrl = /^https?:\/\//i.test(trimmedValue);
        const linkMetadata = await fetchLinkMetadata(trimmedValue);

        setMetadata(linkMetadata);

        const userContent: any[] = [
          {
            type: 'text',
            text: `Find multiple possible/similar real-world places from this input.

User Input:
${trimmedValue}

Input Type:
${isUrl ? 'URL' : 'Text/Search Query'}

Platform:
${linkMetadata.platform}

Title:
${linkMetadata.title}

Description:
${linkMetadata.description}

Page Text:
${linkMetadata.pageText}

Task:
Return 5 possible place recommendations.

Example:
If input is "lucky one mall", return places like:
- LuckyOne Mall, Karachi
- Dolmen Mall Clifton, Karachi
- Ocean Mall, Karachi
- Millennium Mall, Karachi
- Atrium Mall, Karachi

Rules:
- First item should be the most likely exact match.
- If title or description contains a clear hotel, resort, mall, restaurant, landmark, or destination name, use it as the first result.
- Other items should be similar nearby or same-category places.
- Prefer exact POI names: mall, restaurant, beach, park, hotel, resort, landmark.
- Do not return social media headquarters.
- Do not return "Unknown".
- Do not invent coordinates. Use lat/lng as 0 until Google Places is enabled.
- Confidence must be a percentage string like "95%", "80%", or "45%".
- Keep confidence realistic.`,
          },
        ];

        if (canSendImageToOpenAI(linkMetadata.image)) {
          userContent.push({
            type: 'image_url',
            image_url: {
              url: decodeHtmlEntities(linkMetadata.image),
            },
          });
        }

        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-4o',
            messages: [
              {
                role: 'system',
                content: `You are an AI location recommendation assistant.

Return only valid JSON in this exact structure:

{
  "query": "string",
  "places": [
    {
      "place": "string",
      "category": "string",
      "city": "string",
      "country": "string",
      "confidence": "string",
      "lat": number,
      "lng": number,
      "reason": "string"
    }
  ]
}

Important:
1. Return 3 to 5 places.
2. First place must be the most likely exact match from the input, title, or description.
3. Other places should be similar recommendations.
4. Prefer nearby/same-city/same-category places when possible.
5. Confidence must always be a percentage string, for example "95%".
6. If coordinates are not verified from Google Places, set lat and lng to 0.
7. Never return Facebook, Instagram, YouTube, TikTok, Meta, Google, Twitter/X, or any platform headquarters.
8. Never return Unknown.
9. Do not make fake exact coordinates.`,
              },
              {
                role: 'user',
                content: userContent,
              },
            ],
            response_format: {
              type: 'json_object',
            },
            temperature: 0.4,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
          },
        );

        const aiContent = response.data.choices?.[0]?.message?.content;

        if (!aiContent) {
          throw new Error('Empty OpenAI response');
        }

        const parsedResult = JSON.parse(aiContent);

        const finalResult: LocationSuggestionResponse = {
          query: parsedResult.query || trimmedValue,
          places: normalizePlaces(parsedResult.places),
        };

        setLocations(finalResult);

        return finalResult;
      } catch (err: any) {
        const message = err.response?.data?.error?.message || err.message;

        setError(message);

        console.log(
          'Get Locations Error:',
          JSON.stringify(err.response?.data || err.message),
        );

        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fetchLinkMetadata],
  );

  const resetLocations = useCallback(() => {
    setLoading(false);
    setError(null);
    setLocations(null);
    setMetadata(null);
  }, []);

  return {
    loading,
    error,
    locations,
    metadata,
    getLocations,
    resetLocations,
  };
};