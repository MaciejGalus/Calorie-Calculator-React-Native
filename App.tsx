import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Pages/LoginPage/LoginPage";
import FillProfilePage from "./Pages/FillProfilePage/FillProfilePage";
import { UserProvider } from "./Context/userContext";
import { Routes } from "./constants";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={Routes.loginPage}
            component={LoginPage}
          />
          <Stack.Screen
            // options={{
            //   headerShown: false,
            // }}
            name={Routes.FillYourProfile}
            component={FillProfilePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
