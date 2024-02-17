import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCkNSyfghMl4tQfKTBU-pEWIE_cQLHU9ec',
    authDomain: 'namaste-react-netflix.firebaseapp.com',
    projectId: 'namaste-react-netflix',
    storageBucket: 'namaste-react-netflix.appspot.com',
    messagingSenderId: '937012851942',
    appId: '1:937012851942:web:ffdb92595cffa5be24b727',
    measurementId: 'G-2B8XDDPV37',
};

initializeApp(firebaseConfig);
export const auth = getAuth();
