import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import CalorieCalculatorPage from "../../Pages/CalorieCalculatorPage/CalorieCalculatorPage";
import CalorieTablePage from "../../Pages/CalorieTablePage/CalorieTablePage";
import UserProfilePage from "../../Pages/UserProfilePage/UserProfilePage";
import DailyKcalMenuPage from "../../Pages/DailyKcalMenuPage/DailyKcalMenuPage";
import FillProfilePage from "../../Pages/FillProfilePage/FillProfilePage";

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Daily Kcal"
          component={DailyKcalMenuPage}
          options={{
            tabBarIcon: () => <Icon name="food-outline" size={25} />,
          }}
        />
        <Tab.Screen
          name="Calorie Calculator"
          component={CalorieCalculatorPage}
          options={{
            tabBarIcon: () => (
              <Icon name="calculator-variant-outline" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Calorie Table"
          component={CalorieTablePage}
          options={{
            tabBarIcon: () => (
              <Icon name="file-table-box-multiple-outline" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="User Profile"
          component={FillProfilePage}
          options={{
            tabBarIcon: () => <Icon name="account-circle-outline" size={25} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabsNavigation;
