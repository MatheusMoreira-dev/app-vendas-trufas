import { auth } from "./firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth/web-extension";
import { signOut } from "firebase/auth";

export async function loginWithGoogle(onSucess, onError) {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    onSucess(result);
  } catch (err) {
    onError(err);
  }
}

export const logOut = () => signOut(auth);
