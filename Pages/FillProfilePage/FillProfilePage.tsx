import {
  // Text,
  View,
  StyleSheet,
  // TextInput,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../Context/userContext";
import { useContext, useState } from "react";
import { Gender, Routes } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, AppBar } from "@react-native-material/core";

const FillProfilePage = () => {
  const navigation = useNavigation();
  const { updateUser } = useFetch();
  const { user, setUser } = useContext(UserContext);
  const [gender, setGender] = useState<string | "">("");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const onSubmitButton = () => {
    if (gender !== "" && age !== "" && height !== "" && weight !== "") {
      setUser((prevUser) => {
        return {
          ...prevUser,
          age: +age,
          gender: gender,
          height: +height,
          weight: +weight,
        };
      });

      updateUser(user.id, {
        age: +age,
        gender: gender,
        height: +height,
        weight: +weight,
      });
      navigation.navigate(Routes.MainMenu as never);
    }
  };

  return (
    <View style={styles.centerComponent}>
      <View>
        <Text variant="h4" style={{ fontWeight: "bold" }}>
          Cześć {user.name} !
        </Text>
        <Text>Fill your profile</Text>
      </View>

      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-around",
            alignSelf: "center",
            marginBottom: 25,
          }}
        >
          <Button
            title="Male"
            color={gender === Gender.male ? "rgb(132, 55, 242)" : "lightgray"}
            onPress={() => setGender(Gender.male)}
          />
          <Button
            title="Female"
            color={gender === Gender.female ? "rgb(132, 55, 242)" : "lightgray"}
            onPress={() => setGender(Gender.female)}
          />
        </View>
        <TextInput
          value={age}
          keyboardType="numeric"
          placeholder="Your age"
          onChangeText={(text) => {
            setAge(text);
          }}
        />

        <TextInput
          value={height}
          keyboardType="numeric"
          placeholder="Your height (cm)"
          onChangeText={(text) => {
            setHeight(text);
          }}
          style={{ marginVertical: 15 }}
        />

        <TextInput
          value={weight}
          keyboardType="numeric"
          placeholder="Your weight (kg)"
          onChangeText={(text) => {
            setWeight(text);
          }}
        />

        <Button
          title="Submit"
          onPress={onSubmitButton}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerComponent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    // height: "40%",
  },
  inputContainer: {
    flexDirection: "column",
    height: "60%",
    marginTop: 30,
    justifyContent: "center",
  },
});

export default FillProfilePage;
