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
    name: "Sid",
    age: 12,
    stressLevel: 5,
    job: {
      title: "Meower",
      company: "Meowers Inc",
    },
    isCat: true,
    location: {
      city: "Dallas",
      country: "USA",
    },
  })
  .then(() => {
    console.log("saved ddata");
  })
  .catch((e) => {
    console.log("ruh roh, romething went wront raggy", e);
  });

db.ref()
  .update({
    stressLevel: 9,
    "job/company": "Freelance Pooper",
    "location/city": "Denver",
  })
  .then(() => {
    console.log("Succesful Update!");
  });

// db.ref("isCat")
//   .remove()
//   .then(() => {
//     console.log("ref removed!");
//   })
//   .catch((e) => {
//     console.log("ruh roh, romething went wront raggy", e);
//   });
