// Your web app's Firebase configuration (tine, maja, laurids og pernille)
let firebaseConfig = {
  apiKey: "AIzaSyDZnVlneuJHUs8AwH4FajXXViKvVsvTFQ4",
  authDomain: "campingaarhus-73290.firebaseapp.com",
  projectId: "campingaarhus-73290",
  storageBucket: "campingaarhus-73290.appspot.com",
  messagingSenderId: "251319843186",
  appId: "1:251319843186:web:ed3d77423d223055bd85eb"
};

//intialize firebase (tine, maja, laurids og pernille)
firebase.initializeApp(firebaseConfig);
const _db = firebase.firestore();
const _gamesRef = _db.collection("games");