import firebase from "firebase/app";
import "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyCgAEjy8Si57ofuDHg3lCasvTZF4RHIic0",
  authDomain: "blogfirebase-7ce58.firebaseapp.com",
  projectId: "blogfirebase-7ce58",
  storageBucket: "blogfirebase-7ce58.appspot.com",
  messagingSenderId: "19757266349",
  appId: "1:19757266349:web:ee6580a58fe0f57b721d24"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();