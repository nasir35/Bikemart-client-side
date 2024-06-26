import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
  signOut,
} from "firebase/auth";
import AuthenticationInitializer from "../Firebase/firebase.init";

// initialize firebase app
AuthenticationInitializer();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  const registerUser = (email, password, name, photoURL, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        const newUser = { email, displayName: name, photoURL: photoURL };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, photoURL, "POST");
        // update name and photo of user in firebase
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const url = location?.state?.from || "/";
        history.replace(url);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdmin(true);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://bikemart-server-side-nasir35.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch(
      "https://bikemart-server-side-bem11l6mg-nasir35s-projects.vercel.app/users",
      {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then();
  };

  return {
    user,
    token,
    admin,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
