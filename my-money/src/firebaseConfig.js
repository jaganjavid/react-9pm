
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuoqtbU1g_s9uClGJzWYNiabaS-FSjKeg",
  authDomain: "money-app-8d36d.firebaseapp.com",
  projectId: "money-app-8d36d",
  storageBucket: "money-app-8d36d.appspot.com",
  messagingSenderId: "394212286596",
  appId: "1:394212286596:web:333625eee1c5111ba2e2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {fireDb, app};