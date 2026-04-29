// hooks/useNetwork.ts
import { useEffect, useState } from 'react';
import { getNetworkInfo, subscribeNetwork, NetworkInfo } from '@/utils/network';

export default function useNetwork(pingUrl?: string) {
  const [net, setNet] = useState<NetworkInfo>({
    isConnected: false,
    isInternetReachable: null,
    type: 'unknown',
  });

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const s = await getNetworkInfo();
      if (mounted) setNet(s);

      // Optional: custom reachability ping (helps when captive portals)
      if (pingUrl && s.isConnected) {
        try {
          const res = await fetch(pingUrl, { method: 'HEAD' });
          if (mounted) setNet((prev) => ({ ...prev, isInternetReachable: res.ok }));
        } catch {
          if (mounted) setNet((prev) => ({ ...prev, isInternetReachable: false }));
        }
      }
    };

    init();

    const unsub = subscribeNetwork((s) => setNet(s));
    return () => {
      mounted = false;
      unsub();
    };
  }, [pingUrl]);

  return {
    ...net,
    /** convenience booleans */
    isOffline: !net.isConnected || net.type === 'none',
    isWifi: net.type === 'wifi',
    isCellular: net.type === 'cellular',
  };
}