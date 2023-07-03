import { createContext, useState } from "react";

interface UserData {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  // password: string;
  // setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserData>({
  user: "",
  setUser: () => {},
  // password: "",
  // setPassword: () => {},
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
