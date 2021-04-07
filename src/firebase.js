import  firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDzzn2wtGmjDmRqB3_bG3I7rsr2FTpvz5I",
    authDomain: "netflix-app-a02a0.firebaseapp.com",
    projectId: "netflix-app-a02a0",
    storageBucket: "netflix-app-a02a0.appspot.com",
    messagingSenderId: "748481877015",
    appId: "1:748481877015:web:5f9d5cbf0102d065697852"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;