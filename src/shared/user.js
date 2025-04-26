import { createContext, useContext } from 'react';

export const UserContext = createContext({
  name: null,
  group: null,
});

export function useUser() {
  const user = useContext(UserContext);
};
