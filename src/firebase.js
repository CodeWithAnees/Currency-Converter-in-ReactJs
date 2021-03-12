import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAalcQ51vNyzjii0OnnIfk1eGu5TI1dmWw",
  authDomain: "fir-authentication-fb2f3.firebaseapp.com",
  projectId: "fir-authentication-fb2f3",
  storageBucket: "fir-authentication-fb2f3.appspot.com",
  messagingSenderId: "90225090754",
  appId: "1:90225090754:web:47c49548d906d62341db5b",
  measurementId: "G-EWCP7449N1"


  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,      
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app
