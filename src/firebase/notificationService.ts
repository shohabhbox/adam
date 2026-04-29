import messaging, {
  AuthorizationStatus,
} from '@react-native-firebase/messaging';

import Firebase from './firebaseConfig';
import { Platform } from 'react-native';
import { store } from '@/redux/store';
import { API } from '@/constant/config';
import axios from 'axios';

export async function requestUserPermission() {
  Firebase((success: number) => {});
  const authStatus = await messaging().requestPermission();
  if (!messaging().isDeviceRegisteredForRemoteMessages)
    await messaging().registerDeviceForRemoteMessages();
  if (authStatus === AuthorizationStatus.AUTHORIZED) await getFcmToken();
}
const getFcmToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  try {
    messaging().getToken().then(SetFcmToken).catch();
    messaging().onTokenRefresh(SetFcmToken);
  } catch (error) {
    console.log('error', error);
  }
};

const SetFcmToken = async (token: string) => {
  let isLogin = store.getState()?.auth.isLogin;
  if (isLogin) {
    let config = {
      headers: {
        Authorization: `Bearer ` + store.getState()?.auth.accessToken,
        'Content-Type': 'application/json',
      },
    };
    // let postData = {
    //   DeviceFcmToken: token,
    //   DeviceType: Platform.OS,
    // };

    // const onSuccess = () => {};
    // const onFailure = (error: any) => {};
    // axios
    //   .post(API.BaseUrl + API.FCM_TOKEN, postData, config)
    //   .then(onSuccess)
    //   .catch(onFailure);
  }
};
