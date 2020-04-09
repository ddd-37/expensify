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

console.log("request started");
db.ref()
  .set({
    name: "Finn",
    city: "Ft Worth",
    age: 9,
    isCat: true,
    location: {
      city: "Denver",
      country: "USA",
    },
  })
  .then(() => {
    console.log("saved ddata");
  })
  .catch((e) => {
    console.log("ruh roh, romething went wront raggy", e);
  });

//db.ref().set("herefsf be some data");

db.ref("attributes")
  .set({
    height: 30,
    weight: 18,
  })
  .then(() => {
    console.log("succesfully udpate");
  })
  .catch((e) => {
    console.log("ruh roh, romething went wront raggy", e);
  });
