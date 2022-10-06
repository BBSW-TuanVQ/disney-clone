import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8UiGOEOhHsHJwmxRoFTFK_i_d4ar-7KM",
  authDomain: "disneyplus-clone-9a855.firebaseapp.com",
  projectId: "disneyplus-clone-9a855",
  storageBucket: "disneyplus-clone-9a855.appspot.com",
  messagingSenderId: "763753225346",
  appId: "1:763753225346:web:36a90d54d0ac505e2ce89b",
  measurementId: "G-LQGPWG2TZY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const storage = getStorage();

export {auth, provider, storage}
export default db;
