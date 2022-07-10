let firebaseConfig = {
  apiKey: "AIzaSyDmBzapEPD11IKbJkKDjjxEedlPCdntNU8",
  authDomain: "blog-22eaa-f982f.firebaseapp.com",
  projectId: "blog-22eaa-f982f",
  storageBucket: "blog-22eaa-f982f.appspot.com",
  messagingSenderId: "1007142566374",
  appId: "1:1007142566374:web:75614586aeabb6186fbe27",
  measurementId: "G-D2K4YR8TRM"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();