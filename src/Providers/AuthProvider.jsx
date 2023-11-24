import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "./../FIrebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxioxSecure";
import useAxiosPublic from "./../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const provider1 = new GithubAuthProvider();
const provider2 = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        //
        const userInfo = { email: currentUser?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        //
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, provider1);
  };

  const SignInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider2);
  };

  const authInfo = {
    user,
    loading,
    logOut,
    SignIn,
    createUser,
    SignInGithub,
    SignInGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
