import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userdata, setUserData] = useState({ employee: [], admin: [] });

  useEffect(() => {
    // setLocalStorage();
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
