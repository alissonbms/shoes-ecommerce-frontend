import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAL5Wza4T5Szn2599aBLcrive0yXaT7NSc',
  authDomain: 'shoes-ecommerce-9ae56.firebaseapp.com',
  projectId: 'shoes-ecommerce-9ae56',
  storageBucket: 'shoes-ecommerce-9ae56.appspot.com',
  messagingSenderId: '687820245140',
  appId: '1:687820245140:web:de195e8ce59dd04804cc81'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
