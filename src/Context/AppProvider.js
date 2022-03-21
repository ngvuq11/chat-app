import React, { useState } from 'react';
import Spin from 'antd/es/spin';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useFireStore } from '../hooks/useFireStore';
import { authContext } from '../Context/AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const {
    user: { uid },
  } = React.useContext(authContext);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'users',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFireStore('rooms', roomsCondition);

  console.log('rooms', rooms);

  return (
    <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
  );
}
