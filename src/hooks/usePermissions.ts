// hooks/usePermissions.ts
import { useCallback, useState } from 'react';
import {
    ensureLocation,
    ensureNotifications,
    ensureCamera,
    ensurePhotos,
    checkLocation,
    checkNotifications,
    checkCamera,
    checkPhotos,
} from '@/utils/permissions';
import { Alert, Linking, Platform } from 'react-native';

export type PermissionType =
    | 'location'
    | 'enableNotification'
    | 'camera'
    | 'photos'
    | 'booking'
    | 'chat'
    | 'promotion'
    | 'emailNotification'
    | 'smsNotification';

/** Converts complex permission state → boolean */
const isGranted = (state: string) => state === 'granted' || state === 'limited'; // limited counts as granted (iOS Photos)

/** React hook for permissions — Boolean version */
export default function usePermissions() {
    const [permissions, setPermissions] = useState<Record<PermissionType, boolean>>({
        location: false,
        enableNotification: false,
        camera: false,
        photos: false,
        booking: false,
        chat: false,
        promotion: false,
        emailNotification: false,
        smsNotification: false,
    });

    const revokePermissionFlow = async (type: PermissionType) => {
        const titles: Record<Partial<PermissionType>, string> = {
            location: 'Location Permission',
            camera: 'Camera Permission',
            photos: 'Photos Permission',
            enableNotification: 'Notification Permission',
        };

        const messages: Record<PermissionType, string> = {
            location:
                'To turn off location, go to Settings and set Location permission to “Don’t allow”.',
            camera: 'To disable camera access, go to Settings → Permissions → Camera → “Don’t allow”.',
            photos: 'To remove photo access, go to Settings → Photos → None or Selected Photos.',

            enableNotification:
                'To stop receiving notifications, open Settings → Notifications and turn them off.',
        };

        const title = titles[type] ?? 'App Permission';
        const message = messages[type] ?? 'You can manage this permission in system settings.';

        Alert.alert(
            title,
            message,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Open Settings',
                    onPress: () => {
                        // Open correct settings page
                        if (Platform.OS === 'ios') {
                            return Linking.openURL('app-settings:');
                        } else {
                            return Linking.openSettings();
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    /** ─── ASK PERMISSIONS ─────────────────────────── */
    const askLocation = useCallback(async () => {
        const res = await ensureLocation();
        const granted = isGranted(res);

        setPermissions((prev) => ({ ...prev, location: granted }));

        return granted;
    }, []);

    const askNotifications = useCallback(async () => {
        const res = await ensureNotifications();
        const granted = isGranted(res);
        return granted;
    }, []);

    const askCamera = useCallback(async () => {
        const res = await ensureCamera();
        const granted = isGranted(res);
        return granted;
    }, []);

    const askPhotos = useCallback(async () => {
        const res = await ensurePhotos();
        const granted = isGranted(res);
        return granted;
    }, []);

    function askPermission(key: PermissionType) {
        console.log('key', key);

        switch (key) {
            case 'enableNotification':
                return askNotifications();
                break;
            case 'location':
                return askLocation();
                break;
            case 'photos':
                return askPhotos();
                break;
            case 'camera':
                return askCamera();
                break;
            case 'booking':
                return Promise.resolve(true);
                break;
            case 'chat':
                return Promise.resolve(true);
                break;
            case 'promotion':
                return Promise.resolve(true);
                break;
            case 'emailNotification':
                return Promise.resolve(true);
                break;
            case 'smsNotification':
                return Promise.resolve(true);
                break;

            default:
                break;
        }
    }

    /** ─── CHECK CURRENT ───────────────────────────── */
    const checkAllPermissions = useCallback(async () => {
        const results = await Promise.all([
            checkLocation(),
            checkNotifications(),
            checkCamera(),
            checkPhotos(),
        ]);

        const mapped = {
            location: isGranted(results[0]),
            enableNotification: isGranted(results[1]),
            camera: isGranted(results[2]),
            photos: isGranted(results[3]),
        };

        setPermissions(mapped);
        return mapped;
    }, []);

    return {
        permissions,
        askLocation,
        askNotifications,
        askCamera,
        askPhotos,
        checkAllPermissions,
        askPermission,
        revokePermissionFlow,
        isGranted,
        checkNotifications,
        setPermissions,
    };
}