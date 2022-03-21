import React, { useState } from 'react';
import Spin from 'antd/es/spin';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';

export const authContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  React.useEffect(() => {
    const unSubcribed = auth.onAuthStateChanged((user) => {
      console.log('user', user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        history.push('/');
      }
      setIsLoading(false);
      history.push('/login');
      return;
    });
    return () => {
      unSubcribed();
    };
  }, [history]);
  return (
    <authContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </authContext.Provider>
  );
}
