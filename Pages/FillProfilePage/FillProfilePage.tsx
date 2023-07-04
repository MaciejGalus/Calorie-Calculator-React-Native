import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../Context/userContext";
import { useContext, useState } from "react";
import { Gender } from "../../constants";
import useFetch from "../../hooks/useFetch";

const FillProfilePage = () => {
  const { updateUser } = useFetch();
  const { user, setUser } = useContext(UserContext);
  const [gender, setGender] = useState<string | "">("");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const onSubmitButton = () => {
    if (gender !== "" && age !== "" && height !== "" && weight !== "") {
      console.log("sent");
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
    }
  };

  return (
    <View>
      <View style={styles.centerComponent}>
        <Text style={styles.welcomeText}>Cześć {user.name} !</Text>
        <Text>Fill your profile</Text>
      </View>

      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "60%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => setGender(Gender.male)}>
            <Text>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGender(Gender.female)}>
            <Text>Female</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          value={age}
          keyboardType="numeric"
          placeholder="Your age"
          onChangeText={(text) => {
            setAge(text);
          }}
          style={styles.inputStyle}
        />

        <TextInput
          value={height}
          keyboardType="numeric"
          placeholder="Your height (cm)"
          onChangeText={(text) => {
            setHeight(text);
          }}
          style={styles.inputStyle}
        />

        <TextInput
          value={weight}
          keyboardType="numeric"
          placeholder="Your weight (kg)"
          onChangeText={(text) => {
            setWeight(text);
          }}
          style={styles.inputStyle}
        />

        <Button title="Submit" onPress={onSubmitButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "10%",
  },
  centerComponent: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    alignSelf: "center",
    height: "30%",
  },
  inputContainer: {
    height: "40%",
    marginTop: 30,
    justifyContent: "space-between",
    // backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  inputStyle: {
    paddingLeft: 10,
    width: "70%",
    borderColor: "darkgray",
    borderBottomWidth: 1,
    backgroundColor: "white",
    height: 40,
  },
});

export default FillProfilePage;
