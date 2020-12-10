
//intialize firebase 
firebase.initializeApp.(firebaseConfig);
const _db = firebase.firestore();
const _gamesRef = _db.collection("games");












import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDZnVlneuJHUs8AwH4FajXXViKvVsvTFQ4",
  authDomain: "campingaarhus-73290.firebaseapp.com",
  projectId: "campingaarhus-73290",
  storageBucket: "campingaarhus-73290.appspot.com",
  messagingSenderId: "251319843186",
  appId: "1:251319843186:web:ed3d77423d223055bd85eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firestore()
export const postRef = db.collection('games');
