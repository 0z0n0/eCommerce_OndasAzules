import { getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5MyJi66LYTX0Y0tEcTHHqKgwTYtCsbyY",
  authDomain: "proyecto-react-ondasazules.firebaseapp.com",
  projectId: "proyecto-react-ondasazules",
  storageBucket: "proyecto-react-ondasazules.appspot.com",
  messagingSenderId: "346090863773",
  appId: "1:346090863773:web:e9dabbaf7b38b2e8abe874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

