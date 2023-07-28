import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

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
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const db = firebase.firestore();

