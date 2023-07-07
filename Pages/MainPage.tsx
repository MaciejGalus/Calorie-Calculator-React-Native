import { useContext } from "react";
import BottomTabsNavigation from "../Navigation/BottomTabsNavigations/BottomTabsNavigation";
import { UserContext } from "../Context/userContext";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage/LoginPage";
import { Routes, materialPurpleColor } from "../constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FillProfilePage from "./FillProfilePage/FillProfilePage";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const MainPage = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const { isLogged } = useContext(UserContext);

  if (!isLogged) {
    return <LoginPage />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{
              // headerStyle: {
              //   backgroundColor: materialPurpleColor,
              // },
              // headerTintColor: "white",
              headerShown: false,
            }}
            name={Routes.FillYourProfile}
            component={FillProfilePage}
          /> */}
          <Stack.Screen
            options={{
              // headerStyle: {
              //   backgroundColor: materialPurpleColor,
              // },
              // headerTintColor: "white",
              headerShown: false,
            }}
            name={Routes.MainMenu}
            component={BottomTabsNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainPage;
