import { View } from "react-native";
import { useState } from "react";
import { WeightTarget } from "../../constants";
import { styles } from "../../styles";
import { Text, TextInput, Button } from "@react-native-material/core";
import { Gender } from "../../constants";
import SelectDropdown from "react-native-select-dropdown";

const CalorieCalculatorPage = () => {
  const [gender, setGender] = useState<string | "">("");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [goal, setGoal] = useState<WeightTarget | "">("");
  const [myKcal, setMyKcal] = useState<number | "" | undefined>("");

  const activityLevels = [
    { level: 1.2, description: "1.2 - Low. Sedentary work" },
    { level: 1.35, description: "1.35 - Moderate. 1-3 workouts per week" },
    { level: 1.55, description: "1.55 - Middle. 3-5 workouts per week" },
    { level: 1.75, description: "1.75 - Very active" },
    { level: 1.9, description: "1.9 - Very active + physical work" },
  ];

  const cleanForm = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setGender("");
    setMyKcal("");
    setActivity("");
    setGoal("");
  };

  const toggleButtonDisabled = (): boolean => {
    if (
      age === "" ||
      height === "" ||
      weight === "" ||
      activity === "" ||
      goal === ""
    ) {
      return true;
    } else return false;
  };

  const handleSubmitButton = () => {
    if (myKcal) {
      setMyKcal("");
      cleanForm();
    } else {
      setMyKcal(displayOutcome());
    }
  };

  const displayOutcome = (): number | undefined => {
    const maleBMR = 10 * +weight + 6.25 * +height - 5 * +age + 5;
    const femaleBMR = 10 * +weight + 6.25 * +height - 5 * +age - 161;
    const maleDailyTargetKcal = maleBMR * +activity;
    const femaleDailyTargetKcal = femaleBMR * +activity;
    if (gender === "male") {
      if (goal === WeightTarget.Keep) {
        return maleDailyTargetKcal;
      } else if (goal === WeightTarget.Lose) {
        return maleDailyTargetKcal - 500;
      } else if (goal === WeightTarget.Gain) {
        return maleDailyTargetKcal + 500;
      }
    } else if (gender === "female") {
      if (goal === WeightTarget.Keep) {
        return femaleDailyTargetKcal;
      } else if (goal === WeightTarget.Lose) {
        return femaleDailyTargetKcal - 500;
      } else if (goal === WeightTarget.Gain) {
        return femaleDailyTargetKcal + 500;
      }
    }
  };

  const actibityGoals = [
    WeightTarget.Gain,
    WeightTarget.Lose,
    WeightTarget.Keep,
  ];

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
          value={age}
          variant="outlined"
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          placeholder="Height(cm)"
          keyboardType="numeric"
          value={height}
          variant="outlined"
          onChangeText={(text) => setHeight(text)}
        />
        <TextInput
          placeholder="Weight"
          keyboardType="numeric"
          value={weight}
          variant="outlined"
          onChangeText={(text) => setWeight(text)}
        />

        <SelectDropdown
          defaultButtonText="Select activity level"
          data={activityLevels.map((data) => data.description)}
          onSelect={(item) => setActivity(item.slice(0, 4))}
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
          onSelect={(item) => setGoal(item)}
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
        {myKcal && (
          <Text>
            Eat {Math.floor(myKcal)} kcal daily if you want to {goal}
          </Text>
        )}
        <View style={{ width: "30%", alignSelf: "center" }}>
          <Button
            title={myKcal ? "Clean" : "Count"}
            onPress={handleSubmitButton}
            disabled={toggleButtonDisabled()}
          />
        </View>
      </View>
    </View>
  );
};

export default CalorieCalculatorPage;
