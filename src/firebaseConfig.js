import firebase from "firebase/app";
/*import "firebase/auth";*/
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAvBqRHlNBwdjoKBb_T_Mgb-yJQtwtMeCk",
    authDomain: "burger-queen-eb21e.firebaseapp.com",
    projectId: "burger-queen-eb21e",
    storageBucket: "burger-queen-eb21e.appspot.com",
    messagingSenderId: "182626907107",
    appId: "1:182626907107:web:f9e752270d2b0234efa6d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase