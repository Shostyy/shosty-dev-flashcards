"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../firebase-config";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      router.push("/");
    } catch {
      console.error("Login failed");
    }
  };

  return (
    <>
      <button onClick={handleLogin}>login with google</button>
    </>
  );
}
