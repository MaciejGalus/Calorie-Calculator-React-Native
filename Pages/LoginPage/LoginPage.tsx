import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/userContext";
import { passwordValidation } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { emptyName, emptyPassword, wrongPassword } from "../../constants";
import VisibilityPasswordIcon from "../../Components/VisibilityPasswordIcon/VisibilityPasswordIcon";

function LoginPage({ navigation }: any) {
  const { setUser } = useContext(UserContext);
  const { getAllUsers, registerUser } = useFetch();
  const [myName, setMyName] = useState<string>("");
  const [myPassword, setMyPassword] = useState<string>("");
  const [nameAlert, setNameAlert] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [signUpMenu, setSignUpMenu] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [updateAllUsers, setUpdateAllUsers] = useState<boolean>(false);

  const onSignupSubmit = () => {
    setUpdateAllUsers(!updateAllUsers);
    if (myName.length && myPassword.match(passwordValidation)) {
      registerUser(myName.trim(), myPassword.trim());
      cleanForms();
    } else {
      if (!myName.length) {
        setNameAlert(emptyName);
      }

      if (!myPassword.length) {
        setPasswordAlert(emptyPassword);
      } else if (!myPassword.match(passwordValidation)) {
        setPasswordAlert(wrongPassword);
      }
    }
  };

  useEffect(() => {
    // w rzeczywistosci powinmien pojsc post na backend z id uzytkownika i tokenem zeby spr czy mamy tam takiego
    getAllUsers(setAllUsers);
  }, [updateAllUsers]);
  console.log(allUsers);

  const cleanForms = () => {
    setMyName("");
    setMyPassword("");
    setNameAlert("");
    setPasswordAlert("");
  };

  const onLoginSubmit = () => {
    if (!myName.length) {
      setNameAlert(emptyName);
    }
    if (!myPassword.length) {
      setPasswordAlert(emptyPassword);
    }

    if (myName.length && myPassword.match(passwordValidation)) {
      setUser(myName.trim());
      cleanForms();
      navigation.navigate("secondNavi" as never);
    }
  };

  const displayNameAlert = !myName.length && (
    <Text style={styles.alertButton}>{nameAlert}</Text>
  );

  const displayPasswordAlert =
    !myPassword.length || !myPassword.match(passwordValidation) ? (
      <Text style={styles.alertButton}>{passwordAlert}</Text>
    ) : null;

  const loginFooter = (
    <View
      style={{
        marginTop: "10%",
        alignItems: "center",
      }}
    >
      <Text>Don't have an account ?</Text>
      <TouchableOpacity
        onPress={() => {
          setSignUpMenu(true);
          cleanForms();
        }}
      >
        <Text style={styles.signUpTryb}>Sign up</Text>
      </TouchableOpacity>
      {/* <Text>Forgott your password?</Text> */}
    </View>
  );

  const signUpFooter = (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSignUpMenu(false);
          cleanForms();
        }}
      >
        <Text style={{ fontWeight: "bold", marginTop: 20 }}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.centerComponent}>
        {signUpMenu ? (
          <Text style={styles.loginHeader}>Sign up</Text>
        ) : (
          <Text style={styles.loginHeader}>Log in</Text>
        )}
        <TextInput
          value={myName}
          placeholder="Your name"
          onChangeText={(text) => setMyName(text)}
          style={styles.inputName}
        />
        {displayNameAlert}
        <View style={styles.passwordInputContainer}>
          <TextInput
            secureTextEntry={hidePassword}
            value={myPassword}
            placeholder="Password"
            onChangeText={(text) => setMyPassword(text)}
            style={styles.inputPassword}
          />

          <VisibilityPasswordIcon
            onPressToggler={() => setHidePassword(!hidePassword)}
            isDisabled={!myPassword.length}
            hidePassword={hidePassword}
          />
        </View>
        {displayPasswordAlert}
        {signUpMenu ? (
          <Button title="SIGN UP" onPress={onSignupSubmit} />
        ) : (
          <Button title="LOGIN" onPress={onLoginSubmit} />
        )}
        {signUpMenu ? signUpFooter : loginFooter}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpTryb: { color: "#1e90ff", fontWeight: "bold" },
  loginHeader: { fontSize: 24, fontWeight: "700" },
  mainContainer: { height: "100%", justifyContent: "center" },
  centerComponent: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    alignSelf: "center",
    height: "50%",
  },
  inputName: {
    width: "100%",
    borderColor: "darkgray",
    borderBottomWidth: 1,
    height: 50,
  },
  inputPassword: {
    width: "90%",
    borderColor: "darkgray",
    borderBottomWidth: 1,
    height: 50,
  },

  alertButton: {
    color: "red",
  },

  passwordInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginPage;
