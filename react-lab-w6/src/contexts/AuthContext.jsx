// src/contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means logged out
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  // แก้ bug : ให้ส่งค่า login and logout ไปที่ Provider 
const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);