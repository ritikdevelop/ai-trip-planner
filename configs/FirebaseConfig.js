import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import {  getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDp_iIR6C_3N5tgnlRt5aoeCPQ4xd0sHiY",
  authDomain: "mobile-application-14af2.firebaseapp.com",
  projectId: "mobile-application-14af2",
  storageBucket: "mobile-application-14af2.firebasestorage.app",
  messagingSenderId: "839071411451",
  appId: "1:839071411451:web:61368ed7dd95102b20545e",
  measurementId: "G-0E1T2EXCVP",
};

//! Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);