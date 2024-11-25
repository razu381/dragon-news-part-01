import { createContext, useEffect, useState } from "react";
import { auth } from "../firbaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export let AuthContext = createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState();
  let [loading, setLoading] = useState(true);

  function createUser(email, pass) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  function logInUser(email, pass) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }

  function logOut() {
    setLoading(true);
    console.log("Logout clicked");
    return signOut(auth);
  }

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  let authInfo = {
    user,
    setUser,
    createUser,
    logInUser,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
