// utils/network.ts
import NetInfo, { NetInfoState, NetInfoStateType } from '@react-native-community/netinfo';

export type ConnectionType =
  | 'wifi'
  | 'cellular'
  | 'ethernet'
  | 'vpn'
  | 'bluetooth'
  | 'wimax'
  | 'other'
  | 'unknown'
  | 'none';

export type NetworkInfo = {
  isConnected: boolean;        // true if has internet
  isInternetReachable?: boolean | null; // best-effort reachability
  type: ConnectionType;        // wifi | cellular | none | ...
  details?: NetInfoState['details'];
};

/** Get current network state once */
export async function getNetworkInfo(): Promise<NetworkInfo> {
  const s = await NetInfo.fetch();
  return {
    isConnected: Boolean(s.isConnected),
    isInternetReachable: s.isInternetReachable ?? null,
    type: mapType(s.type),
    details: s.details,
  };
}

/** Subscribe to changes; returns unsubscribe */
export function subscribeNetwork(
  cb: (state: NetworkInfo) => void
): () => void {
  return NetInfo.addEventListener((s) => {
    cb({
      isConnected: Boolean(s.isConnected),
      isInternetReachable: s.isInternetReachable ?? null,
      type: mapType(s.type),
      details: s.details,
    });
  });
}

function mapType(t: NetInfoStateType): ConnectionType {
  switch (t) {
    case NetInfoStateType.wifi: return 'wifi';
    case NetInfoStateType.cellular: return 'cellular';
    case NetInfoStateType.ethernet: return 'ethernet';
    case NetInfoStateType.bluetooth: return 'bluetooth';
    case NetInfoStateType.vpn: return 'vpn';
    case NetInfoStateType.wimax: return 'wimax';
    case NetInfoStateType.none: return 'none';
    case NetInfoStateType.unknown: return 'unknown';
    default: return 'other';
  }
}