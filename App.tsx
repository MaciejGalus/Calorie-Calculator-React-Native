import { UserProvider } from "./Context/userContext";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <UserProvider>
      <MainPage />
    </UserProvider>
  );
};

export default App;
