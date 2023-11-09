// import { View } from "react-native";
import {
  Box,
  Flex,
  Text,
  Button,
  TextInput,
} from "@react-native-material/core";
import { useState } from "react";
import { materialPurpleColor } from "../../constants";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface MyIngredient {
  id: number;
  name: string;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}
const DailyKcalMenuPage = () => {
  const [ingredient, setIngredient] = useState<string>("");
  const [kcal, setKcal] = useState<string | "">("");
  const [protein, setProtein] = useState<string | "">("");
  const [fat, setFat] = useState<string | "">("");
  const [carbs, setCarbs] = useState<string | "">("");
  const [editTryb, setEditTryb] = useState(false);
  const [myMeals, setMyMeals] = useState<MyIngredient[] | []>([]);

  const cleanForm = () => {
    setKcal("");
    setProtein("");
    setFat("");
    setCarbs("");
    setIngredient("");
  };

  const addIngredient = () => {
    if (editTryb) {
      const payload: MyIngredient = {
        id: Math.floor(Math.random() * 100),
        name: ingredient,
        kcal: +kcal,
        protein: +protein,
        fat: +fat,
        carbs: +carbs,
      };
      setMyMeals((prevMeals) => [...prevMeals, payload]);
      cleanForm();
      setEditTryb(false);
    } else {
      setEditTryb(true);
    }
  };

  // add ingredient component
  // stworzyc box wrapper do wszystkich
  const editableIngredient = (
    <Box
      // style={{
      //   backgroundColor: "rgb(192,153,248)",
      //   borderRadius: 5,
      //   margin: 3,
      // }}
      w="95%"
      h={60}
    >
      <Flex direction="row" justify="around" items="center" fill>
        <Flex items="center">
          <TextInput
            variant="outlined"
            value={ingredient}
            placeholder="Food"
            onChangeText={(text) => setIngredient(text)}
            style={{ width: 75 }}
          />
          {/* <Text color="white">{ingredient}</Text> */}
        </Flex>
        <Flex items="center">
          <TextInput
            variant="outlined"
            value={kcal}
            placeholder="kcal"
            onChangeText={(text) => setKcal(text)}
            style={{ width: 75 }}
          />
          {/* <Text color="white">{kcal}</Text> */}
        </Flex>
        <Flex items="center">
          <TextInput
            variant="outlined"
            value={protein}
            placeholder="P"
            onChangeText={(text) => setProtein(text)}
            style={{ width: 75 }}
          />
          {/* <Text color="white">{protein}</Text> */}
        </Flex>
        <Flex items="center">
          <TextInput
            variant="outlined"
            value={fat}
            placeholder="F"
            onChangeText={(text) => setFat(text)}
            style={{ width: 75 }}
          />
          {/* <Text color="white">{fat}</Text> */}
        </Flex>
        <Flex items="center">
          <TextInput
            variant="outlined"
            value={carbs}
            placeholder="C"
            onChangeText={(text) => setCarbs(text)}
            style={{ width: 75 }}
          />
          {/* <Text color="white">{carbs}</Text> */}
        </Flex>
      </Flex>
    </Box>
  );

  //stworzyc context dla posiłku

  /// podliczanie kcal
  const sumKcal =
    myMeals.length > 0
      ? myMeals
          .map((kcal) => kcal.kcal)
          .reduce((accumulator, item) => accumulator + item)
      : 0;
  const sumProtein =
    myMeals.length > 0
      ? myMeals
          .map((kcal) => kcal.protein)
          .reduce((accumulator, item) => accumulator + item)
      : 0;
  const sumFat =
    myMeals.length > 0
      ? myMeals
          .map((kcal) => kcal.fat)
          .reduce((accumulator, item) => accumulator + item)
      : 0;
  const sumCarbs =
    myMeals.length > 0
      ? myMeals
          .map((kcal) => kcal.carbs)
          .reduce((accumulator, item) => accumulator + item)
      : 0;

  /// wyswietl liste posiłków / składników
  const displayMyMeals = myMeals.map((food) => {
    return (
      <Box
        style={{
          backgroundColor: "rgb(192,153,248)",
          borderRadius: 5,
          margin: 3,
        }}
        w="95%"
        h={60}
        key={food.id}
      >
        <Flex direction="row" justify="around" items="center" fill>
          <Flex items="center">
            <Text color="white">{food.name}</Text>
          </Flex>
          <Flex items="center">
            <Text color="white">{food.kcal}</Text>
          </Flex>
          <Flex items="center">
            <Text color="white">{food.protein}</Text>
          </Flex>
          <Flex items="center">
            <Text color="white">{food.fat}</Text>
          </Flex>
          <Flex items="center">
            <Text color="white">{food.carbs}</Text>
          </Flex>
        </Flex>
      </Box>
    );
  });

  ///retrun
  return (
    <Flex fill direction="column">
      <Flex direction="column" justify="center" style={{ height: "100%" }}>
        <Flex direction="column" items="center" style={{ height: "75%" }}>
          <Text variant="button">Track your calories</Text>
          <Box
            style={{
              backgroundColor: materialPurpleColor,
              borderRadius: 5,
              margin: 3,
            }}
            w="95%"
            h={60}
          >
            <Flex direction="row" justify="around" items="center" fill>
              <Flex items="center">
                <Text color="white">Ingredient</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">Kcal</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">P(g)</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">F(g)</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">C(g)</Text>
              </Flex>
            </Flex>
          </Box>
          {displayMyMeals}
          {editTryb && editableIngredient}
        </Flex>
        <Flex
          direction="row"
          justify="between"
          self="end"
          style={{ marginBottom: 15, marginRight: 15, width: 150 }}
        >
          <Button
            title={editTryb ? "Confirm" : "Add"}
            onPress={addIngredient}
          />
          <Button
            title="Clean"
            onPress={() => setMyMeals([])}
            disabled={myMeals.length < 1}
          />
        </Flex>
      </Flex>

      {/* OSOBNY KOMPONENT */}
      <Flex direction="column" justify="end" items="center" fill>
        <Box
          style={{
            backgroundColor: materialPurpleColor,
            borderRadius: 5,
            margin: 3,
          }}
          w="95%"
          h={60}
        >
          <Flex direction="row" justify="around" items="center" fill>
            <Flex items="center">
              <Text color="white">Kcal</Text>
              <Text color="white">{sumKcal}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Protein (g)</Text>
              <Text color="white">{sumProtein}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Fat (g)</Text>
              <Text color="white">{sumFat}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Carbs (g)</Text>
              <Text color="white">{sumCarbs}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DailyKcalMenuPage;
