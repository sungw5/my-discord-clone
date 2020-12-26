import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxYo5uqduUI3jjmp4OGThX1U56eHPK9Fo",
  authDomain: "my-discord-clone-cfe00.firebaseapp.com",
  projectId: "my-discord-clone-cfe00",
  storageBucket: "my-discord-clone-cfe00.appspot.com",
  messagingSenderId: "742523327382",
  appId: "1:742523327382:web:02bb3a07c7176cdfba83b7",
  measurementId: "G-MSEZF6QWC4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
