// import { View } from "react-native";
import { Box, Flex, Text, Divider, FAB } from "@react-native-material/core";
import { useState } from "react";
import { materialPurpleColor } from "../../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DailyKcalMenuPage = () => {
  const [ingredient, setIngredient] = useState<string>("");
  const [kcal, setKcal] = useState<number | "">(0);
  const [protein, setProtein] = useState<number | "">(0);
  const [fat, setFat] = useState<number | "">(0);
  const [carbs, setCarbs] = useState<number | "">(0);
  //stworzyc kontekst dla posiłku
  return (
    <Flex fill direction="column">
      <Flex direction="column" justify="center" style={{ height: "100%" }}>
        <Flex direction="column" items="center" style={{ height: "70%" }}>
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
                <Text color="white">{ingredient}</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">Kcal</Text>
                <Text color="white">{kcal}</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">P(g)</Text>
                <Text color="white">{protein}</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">F(g)</Text>
                <Text color="white">{fat}</Text>
              </Flex>
              <Flex items="center">
                <Text color="white">C(g)</Text>
                <Text color="white">{carbs}</Text>
              </Flex>
            </Flex>
          </Box>
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
              <Text color="white">{kcal}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Protein (g)</Text>
              <Text color="white">{protein}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Fat (g)</Text>
              <Text color="white">{fat}</Text>
            </Flex>
            <Flex items="center">
              <Text color="white">Carbs (g)</Text>
              <Text color="white">{carbs}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DailyKcalMenuPage;
