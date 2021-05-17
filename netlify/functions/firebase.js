const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCGd7OAVUT1u3Sf9uoSh_6l8iHg2qh_JJ4",
  authDomain: "kiei-451-spring-2021.firebaseapp.com",
  projectId: "kiei-451-spring-2021",
  storageBucket: "kiei-451-spring-2021.appspot.com",
  messagingSenderId: "902466001150",
  appId: "1:902466001150:web:b5a42e97ab21026b706daf"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase