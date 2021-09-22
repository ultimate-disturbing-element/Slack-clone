import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkMlsXPx0hCPd-A-WJlxId61-7AJF9Ktk",
  authDomain: "prex-slack-clone.firebaseapp.com",
  projectId: "prex-slack-clone",
  storageBucket: "prex-slack-clone.appspot.com",
  messagingSenderId: "748508176649",
  appId: "1:748508176649:web:ce8cb103fc31eafde673d8"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,db,provider};