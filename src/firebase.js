import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZeX8JjURUNp-DLUqAnRG7mlk3G5WHT6A",
  authDomain: "react-whatsappclone-johannamag.firebaseapp.com",
  databaseURL: "https://react-whatsappclone-johannamag.firebaseio.com",
  projectId: "react-whatsappclone-johannamag",
  storageBucket: "react-whatsappclone-johannamag.appspot.com",
  messagingSenderId: "31922110351",
  appId: "1:31922110351:web:d5dc9edcc8a0d6858dd5fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
