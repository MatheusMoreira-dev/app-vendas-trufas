import { auth } from "./firebaseConfig";
import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export async function loginWithGoogle({ onSucess, onError }) {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    onSucess(result);
  } catch (err) {
    onError(err);
  }
}

export const logOut = () => signOut(auth);
