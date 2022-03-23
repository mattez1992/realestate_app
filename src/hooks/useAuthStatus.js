// import { useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { unstable_batchedUpdates } from "react-dom";
// export const useAuthStatus = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     // FIX: use the unsubscribe returned from onAuthStateChanged for cleanup
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       unstable_batchedUpdates(() => {
//         if (user) {
//           setLoggedIn(true);
//         }
//         setLoading(false);
//       });
//     });

//     return unsubscribe;
//   }, []);

//   return { loggedIn, loading };
// };

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [checkingStatus, setCheckingStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    // use ref way
    // if (isMounted) {
    //   const auth = getAuth();
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       setLoggedIn(true);
    //     }
    //     setLoading(false);
    //   });
    // }

    // return () => {
    //   isMounted.current = false;
    // };
    // firebase unsub way
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  return { loggedIn, loading };
};
// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
