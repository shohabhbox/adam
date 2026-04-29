import firebase from '@react-native-firebase/app';

// Your Firebase configuration (updated from the JSON provided)
const firebaseConfig = {
  apiKey: 'AIzaSyCa2CZ0Fy_4mVEvQyKzSn1X-OO9oGzXhkA',  // Updated API key
  authDomain: 'hrtkin-cfea8.firebaseapp.com',  // Updated authDomain
  databaseURL: '',  // Optional if not using Realtime DB
  projectId: 'hrtkin-cfea8',  // Updated projectId
  storageBucket: 'hrtkin-cfea8.firebasestorage.app',  // Updated storageBucket
  messagingSenderId: '1087312249763',  // Updated messagingSenderId
  appId: '1:1087312249763:android:dd6326890b4829fc11d016',  // Updated appId
};

// Function to initialize Firebase
const FirebaseConfig = (callback: any) => {
  if (firebase.apps.length === 0) {
    return firebase.initializeApp(firebaseConfig).then(() => {
      callback({ success: 1 });
    });
  } else {
    firebase.app();
    callback({ success: 1 });
  }
};

export default FirebaseConfig;