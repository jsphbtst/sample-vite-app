import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../configs/firebase';

export const AuthContext = createContext();

// eslint-disable-next-line
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("user", JSON.stringify(user));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const load = () => {
    setIsLoggedIn(null)
  }

  const login = () => {
    // Perform login and set authentication status
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout and set authentication status
    signOut(firebaseAuth)
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, load }}>
      {children}
    </AuthContext.Provider>
  );
}

