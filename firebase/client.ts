
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCDgBDbd1MQXMFDY5O6jAX9l068kO4gt4E",
    authDomain: "prepwise-d506b.firebaseapp.com",
    projectId: "prepwise-d506b",
    storageBucket: "prepwise-d506b.firebasestorage.app",
    messagingSenderId: "584882334635",
    appId: "1:584882334635:web:4150f830d32e31a81480ee",
    measurementId: "G-GZM633JKQT"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)