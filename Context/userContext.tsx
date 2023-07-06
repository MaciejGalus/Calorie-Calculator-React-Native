import { createContext, useState } from "react";

interface UserData {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
}

interface Props {
  children: React.ReactNode;
}

const initialUser: User = {
  id: 0,
  name: "",
  age: 0,
  gender: "",
  height: 0,
  weight: 0,
};

export const UserContext = createContext<UserData>({
  user: initialUser,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const value = { user, setUser, isLogged, setIsLogged };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
