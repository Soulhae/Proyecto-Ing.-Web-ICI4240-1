import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ role: '', userId: ''});

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const updateUserInfo = (newRole, newUserId) => {
    const newUserInfo = { role: newRole, userId: newUserId };
    setUserInfo(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  };

  return (
    <AppContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};