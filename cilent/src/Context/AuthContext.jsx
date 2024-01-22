import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    _id:'',
    token:''
  });

  const login = (userData) => {
    // Perform login logic
    setIsLoggedIn(true);
    setUserData({
      username: userData.username,
      email: userData.email,
      phonenumber: userData.phonenumber,
    });
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
    setUserData({
      username: '',
      email: '',
      phoneNumber: '',
      _id:'',
      token:''
    });
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
