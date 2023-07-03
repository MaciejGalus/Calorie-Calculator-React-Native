import { Text, View } from "react-native";
import { UserContext } from "../../Context/userContext";
import { useContext } from "react";
import styles from "./MainMenu.style";

const MainMenu = () => {
  const { user } = useContext(UserContext);
  return (
    <View>
      <View>
        <Text style={styles.welcomeText}>Cześć {user} !</Text>
      </View>

      <View style={styles.centerComponent}>
        <Text>DANE UZYTKOWNIKA DO KALKULATORA</Text>
      </View>
    </View>
  );
};

export default MainMenu;
