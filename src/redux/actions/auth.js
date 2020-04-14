import { firebase, googleAuthProvider } from "../../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  // Async to we need to return it
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogOut = () => {
  console.log("startLogOut");
  return () => {
    return firebase.auth().signOut();
  };
};
