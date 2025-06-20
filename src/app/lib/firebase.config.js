import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOenK4yMDCl7H0OuPVuXY2m8AOj7fotAE",
  authDomain: "codesphere-33ecc.firebaseapp.com",
  projectId: "codesphere-33ecc",
  storageBucket: "codesphere-33ecc.firebasestorage.app",
  messagingSenderId: "1053835635316",
  appId: "1:1053835635316:web:65018c4ee0510e77fbff21"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export default app