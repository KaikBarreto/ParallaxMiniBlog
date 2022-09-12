
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBO-5xjon4Lys9m_umcw_N14Hnuiv9JO6A",
  authDomain: "miniblog-c9d72.firebaseapp.com",
  projectId: "miniblog-c9d72",
  storageBucket: "miniblog-c9d72.appspot.com",
  messagingSenderId: "901310211823",
  appId: "1:901310211823:web:51bac1ff1c2f27c11a1d1a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
