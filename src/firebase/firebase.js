import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWBReG-SHr5n14B8g78rwlO1FxFNzxmZI",
  authDomain: "expensify-7a9fa.firebaseapp.com",
  databaseURL: "https://expensify-7a9fa.firebaseio.com",
  projectId: "expensify-7a9fa",
  storageBucket: "expensify-7a9fa.appspot.com",
  messagingSenderId: "239917018861",
  appId: "1:239917018861:web:4fe0432d24868905f9e6e4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("test");

const db = firebase.database();

db.ref().set({
  name: "Finffffn",
  city: "Ft Worth",
  age: 9,
  isCat: true,
  location: {
    city: "Denver",
    country: "USA",
  },
});

//db.ref().set("herefsf be some data");

db.ref("age").set(37);
db.ref("location/city").set("Oaxaca");
db.ref("attributes").set({
  height: 30,
  weight: 18,
});

console.log("request");
