import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainMenu from "./Pages/MainMenu/MainMenu";
import { UserProvider } from "./Context/userContext";

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
            name="login"
            component={LoginPage}
          />
          <Stack.Screen
            // options={{
            //   headerShown: false,
            // }}
            name="secondNavi"
            component={MainMenu}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
