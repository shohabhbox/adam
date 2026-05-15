// src/hooks/useGooglePlaceDetails.ts

import { useCallback, useState } from 'react';
import axios from 'axios';
import Config from 'react-native-config';
const GOOGLE_MAPS_API_KEY = "AIzaSyDb9hehdxUMlHeIJ0JxRcjYrkkAKagEbx0";

export type PlacePhoto = {
  name: string;
  widthPx?: number;
  heightPx?: number;
  url: string | null;
  authorAttributions?: any[];
};

export type GooglePlaceDetails = {
  id: string;
  name: string;
  address: string;
  shortAddress: string;
  lat: number;
  lng: number;
  types: string[];
  primaryType: string;
  primaryTypeDisplayName: string;
  businessStatus: string;
  googleMapsUri: string;
  websiteUri: string;
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  rating: number;
  userRatingCount: number;
  priceLevel: string;
  priceRange: any;
  regularOpeningHours: any;
  currentOpeningHours: any;
  editorialSummary: string;
  plusCode: any;
  utcOffsetMinutes: number | null;
  timeZone: any;
  parkingOptions: any;
  paymentOptions: any;
  accessibilityOptions: any;
  reviews: any[];
  photos: PlacePhoto[];
  raw: any;
};

const SEARCH_FIELDS = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.location',
  'places.photos',
].join(',');

const DETAILS_FIELDS = [
  'id',
  'name',
  'displayName',
  'formattedAddress',
  'shortFormattedAddress',
  'location',
  'viewport',
  'types',
  'primaryType',
  'primaryTypeDisplayName',
  'businessStatus',
  'googleMapsUri',
  'websiteUri',
  'nationalPhoneNumber',
  'internationalPhoneNumber',
  'rating',
  'userRatingCount',
  'priceLevel',
  'priceRange',
  'regularOpeningHours',
  'currentOpeningHours',
  'photos',
  'reviews',
  'editorialSummary',
  'plusCode',
  'utcOffsetMinutes',
  'timeZone',
  'parkingOptions',
  'paymentOptions',
  'accessibilityOptions',
].join(',');

export const useGooglePlaceDetails = () => {
  const [loading, setLoading] = useState(false);
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const getPlacePhotoUrl = useCallback(async (photoName: string) => {
    try {
      if (!GOOGLE_MAPS_API_KEY) {
        throw new Error('GOOGLE_MAPS_API_KEY is missing');
      }

      const response = await axios.get(
        `https://places.googleapis.com/v1/${photoName}/media`,
        {
          params: {
            maxWidthPx: 1200,
            skipHttpRedirect: true,
          },
          headers: {
            'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
          },
        },
      );

      return response.data?.photoUri || null;
    } catch (err: any) {
      console.log(
        'Google Place Photo Error:',
        JSON.stringify(err.response?.data || err.message),
      );

      return null;
    }
  }, []);

  const getPlaceDetailsById = useCallback(
    async (placeId: string): Promise<GooglePlaceDetails> => {
      if (!GOOGLE_MAPS_API_KEY) {
        throw new Error('GOOGLE_MAPS_API_KEY is missing');
      }

      const response = await axios.get(
        `https://places.googleapis.com/v1/places/${placeId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
            'X-Goog-FieldMask': DETAILS_FIELDS,
          },
        },
      );

      const place = response.data;

      const photos = Array.isArray(place.photos) ? place.photos : [];

      const photoUrls = await Promise.all(
        photos.slice(0, 5).map(async (photo: any) => {
          const url = await getPlacePhotoUrl(photo.name);

          return {
            name: photo.name,
            widthPx: photo.widthPx,
            heightPx: photo.heightPx,
            authorAttributions: photo.authorAttributions || [],
            url,
          };
        }),
      );

      return {
        id: place.id || '',
        name: place.displayName?.text || '',
        address: place.formattedAddress || '',
        shortAddress: place.shortFormattedAddress || '',
        lat: Number(place.location?.latitude || 0),
        lng: Number(place.location?.longitude || 0),

        types: place.types || [],
        primaryType: place.primaryType || '',
        primaryTypeDisplayName: place.primaryTypeDisplayName?.text || '',
        businessStatus: place.businessStatus || '',

        googleMapsUri: place.googleMapsUri || '',
        websiteUri: place.websiteUri || '',
        nationalPhoneNumber: place.nationalPhoneNumber || '',
        internationalPhoneNumber: place.internationalPhoneNumber || '',

        rating: Number(place.rating || 0),
        userRatingCount: Number(place.userRatingCount || 0),
        priceLevel: place.priceLevel || '',
        priceRange: place.priceRange || null,

        regularOpeningHours: place.regularOpeningHours || null,
        currentOpeningHours: place.currentOpeningHours || null,

        editorialSummary: place.editorialSummary?.text || '',
        plusCode: place.plusCode || null,
        utcOffsetMinutes: place.utcOffsetMinutes || null,
        timeZone: place.timeZone || null,

        parkingOptions: place.parkingOptions || null,
        paymentOptions: place.paymentOptions || null,
        accessibilityOptions: place.accessibilityOptions || null,

        reviews: place.reviews || [],
        photos: photoUrls.filter(photo => photo.url),
        raw: place,
      };
    },
    [getPlacePhotoUrl],
  );

  const getLocationDetail = useCallback(
    async (placeQuery: string, regionCode = 'PK') => {
      try {
        setLoading(true);
        setError(null);
        setPlaceDetails(null);

        if (!GOOGLE_MAPS_API_KEY) {
          throw new Error('GOOGLE_MAPS_API_KEY is missing');
        }

        const searchResponse = await axios.post(
          'https://places.googleapis.com/v1/places:searchText',
          {
            textQuery: placeQuery,
            languageCode: 'en',
            regionCode,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
              'X-Goog-FieldMask': SEARCH_FIELDS,
            },
          },
        );

        const firstPlace = searchResponse.data?.places?.[0];

        if (!firstPlace?.id) {
          throw new Error('No place found from Google Places');
        }

        const details = await getPlaceDetailsById(firstPlace.id);

        setPlaceDetails(details);

        return details;
      } catch (err: any) {
        const message = err.response?.data?.error?.message || err.message;

        setError(message);

        console.log(
          'Google Location Detail Error:',
          JSON.stringify(err.response?.data || err.message),
        );

        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getPlaceDetailsById],
  );

  const resetPlaceDetails = useCallback(() => {
    setPlaceDetails(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    placeDetails,
    getLocationDetail,
    resetPlaceDetails,
  };
};