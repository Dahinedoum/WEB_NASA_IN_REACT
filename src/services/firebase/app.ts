import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
    storageBucket: "nasa-in-react.appspot.com",
    messagingSenderId: "1033280009503",
    appId: "1:1033280009503:web:96500ef252acb375b4ac2a"
  };

const app = initializeApp(firebaseConfig)

export default app