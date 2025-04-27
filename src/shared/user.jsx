import { createContext, useContext, useMemo } from 'react';
import { useSessionStorage } from 'react-use';

const defaultUser = {
  name: null,
  group: null,
  isLoggedIn: () => false,
  login: (name, group) => {},
  logout: () => {},
};

const UserContext = createContext(defaultUser);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useSessionStorage('user', defaultUser);
  const user = useMemo(() => ({
    ...userData,
    isLoggedIn: () => userData.name != null,
    login: (name, group) => {
      setUserData({ name, group });
    },
    logout: () => {
      setUserData(defaultUser);
    },
  }), [userData]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
