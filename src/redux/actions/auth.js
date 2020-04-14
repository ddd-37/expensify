import { firebase, googleAuthProvider } from "../../firebase/firebase";

export const startLogin = () => {
  // Async to we need to return it
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogOut = () => {
  console.log("startLogOut");
  return () => {
    return firebase.auth().signOut();
  };
};
