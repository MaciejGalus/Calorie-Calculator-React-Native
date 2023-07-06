import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/userContext";
import {
  Routes,
  materialPurpleColor,
  passwordValidation,
} from "../../constants";
import useFetch from "../../hooks/useFetch";
import { emptyName, emptyPassword, wrongPassword } from "../../constants";
import VisibilityPasswordIcon from "../../Components/VisibilityPasswordIcon/VisibilityPasswordIcon";
import { Button, Text, TextInput } from "@react-native-material/core";
import { styles } from "../../styles";

function LoginPage({ navigation }: any) {
  const { setUser, user, setIsLogged } = useContext(UserContext);
  const { getAllUsers, registerUser } = useFetch();
  const [myName, setMyName] = useState<string>("");
  const [myPassword, setMyPassword] = useState<string>("");
  const [nameAlert, setNameAlert] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [signUpMenu, setSignUpMenu] = useState(false);
  const [allUsers, setAllUsers] = useState<
    { name: string; password: string; id: number }[]
  >([]);
  const [updateAllUsers, setUpdateAllUsers] = useState<boolean>(false);

  useEffect(() => {
    // w rzeczywistosci powinmien pojsc post na backend z id uzytkownika i tokenem zeby spr czy mamy tam takiego
    getAllUsers(setAllUsers);
  }, [updateAllUsers]);

  const displayValidation = () => {
    if (!myName.length) setNameAlert(emptyName);
    if (!myPassword.length) {
      return setPasswordAlert(emptyPassword);
    } else if (signUpMenu && !myPassword.match(passwordValidation)) {
      setPasswordAlert(wrongPassword);
    }
  };

  const cleanForms = () => {
    setMyName("");
    setMyPassword("");
    setNameAlert("");
    setPasswordAlert("");
  };

  const onSignupSubmit = () => {
    setUpdateAllUsers(!updateAllUsers);
    if (myName.length && myPassword.match(passwordValidation)) {
      registerUser(myName.trim(), myPassword.trim());
      cleanForms();
    } else {
      displayValidation();
    }
  };

  const onLoginSubmit = () => {
    const findUser = allUsers.find((user) => user?.name === myName);
    if (findUser?.name === myName && findUser.password === myPassword) {
      setUser((prevUser) => {
        return { ...prevUser, name: myName.trim(), id: findUser.id };
      });
      cleanForms();
      setIsLogged(true);
      // navigation.navigate(Routes.FillYourProfile as never);
    } else {
      displayValidation();
    }
  };

  const displayNameAlert = !myName.length && (
    <Text variant="h5" color="red">
      {nameAlert}
    </Text>
  );

  const displayPasswordAlert =
    !myPassword.length ||
    (signUpMenu && !myPassword.match(passwordValidation)) ? (
      <Text variant="h5" color="red">
        {passwordAlert}
      </Text>
    ) : null;

  ////////////osobny komponent -------------------------------------------
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
        <Text style={{ fontWeight: "bold", color: materialPurpleColor }}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );

  /////OSOBNY KOMPONENT ------------------------------------------------
  const signUpFooter = (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSignUpMenu(false);
          cleanForms();
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 20,
            alignSelf: "center",
            color: materialPurpleColor,
          }}
        >
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.centerComponent}>
      <View style={{ alignSelf: "center" }}>
        {signUpMenu ? (
          <Text variant="h4" style={{ fontWeight: "bold" }}>
            Sign up
          </Text>
        ) : (
          <Text variant="h4" style={{ fontWeight: "bold" }}>
            Log in
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          variant="standard"
          value={myName}
          placeholder="Your name"
          onChangeText={(text) => setMyName(text)}
        />
        {displayNameAlert}
        <View style={{ flexDirection: "row", flex: 1 }}>
          <TextInput
            variant="standard"
            secureTextEntry={hidePassword}
            value={myPassword}
            placeholder="Password"
            onChangeText={(text) => setMyPassword(text)}
            style={{ width: "90%" }}
          />

          <VisibilityPasswordIcon
            onPressToggler={() => setHidePassword(!hidePassword)}
            isDisabled={!myPassword.length}
            hidePassword={hidePassword}
          />
        </View>
        {displayPasswordAlert}
        <View>
          {signUpMenu ? (
            <Button title="SIGN UP" onPress={onSignupSubmit} />
          ) : (
            <Button title="LOGIN" onPress={onLoginSubmit} />
          )}
          {signUpMenu ? signUpFooter : loginFooter}
        </View>
      </View>
    </View>
  );
}

export default LoginPage;
