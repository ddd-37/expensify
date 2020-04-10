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

const db = firebase.database();

export { firebase, db as default };

// //child_removed
// db.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// db.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// db.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // db.ref("expenses")
// //   .once("value")
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log("expenses", expenses);
// //   });

// // db.ref("expenses").on("value", (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log("expenses", expenses);
// // });

// db.ref("expenses").push({
//   description: "Rent",
//   note: "For April",
//   amount: 1100,
//   createdAt: 3049,
// });

// db.ref("expenses").push({
//   description: "Car payment",
//   note: "For May",
//   amount: 300,
//   createdAt: 1049,
// });

// db.ref("expenses").push({
//   description: "Cat Food",
//   note: "For Cats",
//   amount: 10,
//   createdAt: 3,
// });

// // db.ref().on("value", (snapshot) => {
// //   console.log(snapshot.val().name);
// //   const name = snapshot.val().name;
// //   const jobTitle = snapshot.val().job.title;
// //   const company = snapshot.val().job.company;
// //   console.log(`${name} is a ${jobTitle} at ${company}`);
// // });

// // on uses a callback, so it can run repeatedly
// // const onValueChabnge = db.ref().on(
// //   "value",
// //   (snapshot) => {
// //     console.log(snapshot.val());
// //   },
// //   (error) => {
// //     console.log("Error - .on(): ", error);
// //   }
// // );

// // setTimeout(() => {
// //   db.ref().update({
// //     "job/title": "Software Developer",
// //   });
// // }, 3000);

// // setTimeout(() => {
// //   db.ref().update({
// //     "job/company": "Amazon",
// //   });
// // }, 6000);

// // setTimeout(() => {
// //   db.ref().off("value", onValueChabnge);
// // }, 6000);

// // setTimeout(() => {
// //   db.ref().update({
// //     age: 132,
// //   });
// // }, 9000);

// // once returns a promise so it can only reutrn one time, res or rej
// // db.ref()
// //   .once("value")
// //   .then((snapshot) => {
// //     console.log("====SNAPSHOT====");
// //     console.log(snapshot.val());
// //   })
// //   .catch((e) => {
// //     console.log("Fetchign error: ", e);
// //   });

// // db.ref()
// //   .set({
// //     name: "Sid",
// //     age: 12,
// //     stressLevel: 5,
// //     job: {
// //       title: "Meower",
// //       company: "Meowers Inc",
// //     },
// //     isCat: true,
// //     location: {
// //       city: "Dallas",
// //       country: "USA",
// //     },
// //   })
// //   .then(() => {
// //     console.log("saved ddata");
// //   })
// //   .catch((e) => {
// //     console.log("ruh roh, romething went wront raggy", e);
// //   });

// // db.ref()
// //   .update({
// //     stressLevel: 9,
// //     "job/company": "Freelance Pooper",
// //     "location/city": "Denver",
// //   })
// //   .then(() => {
// //     console.log("Succesful Update!");
// //   });
