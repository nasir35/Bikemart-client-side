import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const AuthenticationInitializer = () => {
    initializeApp(firebaseConfig);
}
export default AuthenticationInitializer;