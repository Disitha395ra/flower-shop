import { StyleSheet, ScrollView,View } from "react-native";
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import { flowers } from "../data/FlowerDB";
export default function Cart({route}) {
  const { id = "Unknown", count = 0 } = route.params || {};
  const flowerdetails = flowers.find(flower=>flower.id ===id);
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text variant="titleLarge" style={styles.text}>
            Flower Name : {flowerdetails.name}
          </Text>
          <Text variant="bodyLarge" style={styles.text}>
            Quantity: {count}
          </Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
