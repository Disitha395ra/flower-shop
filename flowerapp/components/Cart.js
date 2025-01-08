import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import { flowers } from "../data/FlowerDB";

export default function Cart({ route }) {
  const { cart = {} } = route.params || {}; // Get the cart object from params

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {Object.entries(cart).map(([id, count]) => {
          const flower = flowers.find((flower) => flower.id === id);
          return (
            <View key={id} style={styles.card}>
              <Text variant="titleLarge" style={styles.text}>
                Flower Name: {flower?.name || "Unknown"}
              </Text>
              <Text variant="bodyLarge" style={styles.text}>
                Quantity: {count}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  text: {
    marginVertical: 5,
    textAlign: "center",
  },
});
