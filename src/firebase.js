import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDcoKLYc3QMx7Ei2Oie-LZG1qbtwAk0j2Q",
    authDomain: "reclamaciones-abfb2.firebaseapp.com",
    projectId: "reclamaciones-abfb2",
    storageBucket: "reclamaciones-abfb2.appspot.com",
    messagingSenderId: "371036076039",
    appId: "1:371036076039:web:6a291fc23f1472647cd2a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };
