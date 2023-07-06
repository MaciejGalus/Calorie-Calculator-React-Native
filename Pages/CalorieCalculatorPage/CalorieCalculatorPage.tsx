import { View } from "react-native";
import { useState } from "react";
import { WeightTarget } from "../../constants";
import { styles } from "../../styles";
import { Text, TextInput, Button } from "@react-native-material/core";
import { Gender } from "../../constants";
import SelectDropdown from "react-native-select-dropdown";

const CalorieCalculatorPage = () => {
  const [gender, setGender] = useState<string | "">("");
  const [age, setAge] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [activity, setActivity] = useState<number | "">("");
  const [goal, setGoal] = useState<WeightTarget | "">("");
  const [myKcal, setMyKcal] = useState<number | "" | undefined>("");

  const activityLevels = [
    { level: 1.2, description: "1.2 - Low. Sedentary work" },
    { level: 1.35, description: "1.35 - Moderate. 1-3 workouts per week" },
    { level: 1.55, description: "1.55 - Middle. 3-5 workouts per week" },
    { level: 1.75, description: "1.75 - Very active" },
    { level: 1.9, description: "1.9 - Very active + physical work" },
  ];

  const actibityGoals = ["Gain Weight", "Loose Weight", "Keep Weight"];

  return (
    <View style={styles.centerComponent}>
      <View style={styles.inputContainer}>
        <Text variant="h4" style={{ marginBottom: 40, alignSelf: "center" }}>
          CalorieCalculator
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            // justifyContent: "space-around",
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
          placeholder="Age"
          keyboardType="numeric"
          value=""
          variant="outlined"
          onChangeText={() => {}}
        />
        <TextInput
          placeholder="Height(cm)"
          keyboardType="numeric"
          value=""
          variant="outlined"
          onChangeText={() => {}}
        />
        <TextInput
          placeholder="Weight"
          keyboardType="numeric"
          value=""
          variant="outlined"
          onChangeText={() => {}}
        />

        <SelectDropdown
          defaultButtonText="Select activity level"
          data={activityLevels.map((data) => data.description)}
          onSelect={(item) => console.log(item.slice(0, 4))}
          buttonStyle={{
            backgroundColor: "white",
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
          }}
          buttonTextStyle={{
            color: "gray",
          }}
        />
        <SelectDropdown
          defaultButtonText="What do you want ?"
          data={actibityGoals}
          onSelect={() => {}}
          buttonStyle={{
            marginVertical: 4,
            marginBottom: 30,
            backgroundColor: "white",
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
          }}
          buttonTextStyle={{
            color: "gray",
          }}
        />
        <View style={{ width: "30%", alignSelf: "center" }}>
          <Button title="Count" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default CalorieCalculatorPage;
