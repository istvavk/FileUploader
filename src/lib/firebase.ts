import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC59-nQjuvtEW3vcJh53u6Bwe783AckDBo",
    authDomain: "fileuploader-6d261.firebaseapp.com",
    databaseURL: "https://fileuploader-6d261-default-rtdb.firebaseio.com",
    projectId: "fileuploader-6d261",
    storageBucket: "fileuploader-6d261.appspot.com",
    messagingSenderId: "351822759727",
    appId: "1:351822759727:web:6ba5fb487b36f0ec4583da",
    measurementId: "G-4SMBG5DQGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const db = getFirestore(app);
