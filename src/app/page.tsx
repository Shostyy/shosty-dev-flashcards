"use client";

import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        console.log(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>{loading && "loading"}</p>
      {user && <p>{user.email}</p>}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        asd
      </main>
      {user && (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          sign out
        </button>
      )}
    </div>
  );
}
