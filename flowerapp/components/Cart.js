import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text, Card } from "react-native-paper";
import { flowers } from "../data/FlowerDB";
import React from "react";

export default function Cart({ route }) {
  const { cart = {} } = route.params || {}; // Receive the cart object
  const cartItems = Object.entries(cart).map(([id, count]) => ({
    id,
    count,
    ...flowers.find((flower) => flower.id === parseInt(id)), // Ensure ID is parsed correctly
  }));

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Card key={item.id} style={styles.card}>
              <Card.Content>
                <Text variant="titleLarge" style={styles.text}>
                  Flower Name: {item.name}
                </Text>
                <Text variant="bodyLarge" style={styles.text}>
                  Price: {item.price}
                </Text>
                <Text variant="bodyLarge" style={styles.text}>
                  Quantity: {item.count}
                </Text>
                <Text variant="bodyLarge" style={styles.text}>
                  Total: {item.price * item.count}
                </Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text variant="titleLarge" style={styles.emptyText}>
            Your cart is empty.
          </Text>
        )}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    margin: 10,
    padding: 10,
  },
  text: {
    marginBottom: 5,
  },
  emptyText: {
    marginTop: 20,
    textAlign: "center",
  },
});
