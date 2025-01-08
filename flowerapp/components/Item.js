import { StyleSheet, ScrollView } from "react-native";
import {
  PaperProvider,
  Text,
  Button,
  TextInput,
  Card,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { flowers } from "../data/FlowerDB";
import React from "react";

export default function Item({ navigation }) {
  const [counts, setCounts] = React.useState(
    Object.fromEntries(flowers.map((flower) => [flower.id, 0]))
  );
  const [cart, setCart] = React.useState({}); // Store cart as an object { id: count }

  const handlePlus = (id) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      updatedCounts[id] += 1;
      return updatedCounts;
    });
  };

  const handleMinus = (id) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      updatedCounts[id] = Math.max(0, updatedCounts[id] - 1);
      return updatedCounts;
    });
  };

  const handleAddToCart = (id) => {
    if (counts[id] > 0) {
      setCart((prevCart) => ({
        ...prevCart,
        [id]: counts[id], // Add or update the flower in the cart
      }));
    }
  };

  const navigateToCart = () => {
    const fullCart = flowers.reduce((acc, flower) => {
      if (counts[flower.id] > 0) {
        acc[flower.id] = counts[flower.id];
      }
      return acc;
    }, {});
    navigation.navigate("Cart", { cart: fullCart });
  };

  return (
    <PaperProvider>
      <ScrollView>
        {flowers.map((flower) => (
          <Card key={flower.id} style={styles.cardComponent}>
            <Card.Content>
              <Text variant="titleLarge">Name: {flower.name}</Text>
              <Text variant="bodyMedium">Price: {flower.price}</Text>
            </Card.Content>
            <Card.Cover source={flower.img} style={styles.cardPhoto} />
            <Card.Actions>
              <IconButton
                icon="plus"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => handlePlus(flower.id)}
              />
              <TextInput
                label="Count"
                value={counts[flower.id].toString()}
                editable={false}
                style={styles.textField}
              />
              <IconButton
                icon="minus"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => handleMinus(flower.id)}
              />
              <Button
                icon="cart-plus"
                mode="contained"
                onPress={() => handleAddToCart(flower.id)}
              >
                Add to Cart
              </Button>
            </Card.Actions>
          </Card>
        ))}
        <Button
          mode="contained"
          style={styles.checkoutButton}
          onPress={navigateToCart}
        >
          Go to Cart
        </Button>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  cardComponent: {
    margin: 10,
    padding: 10,
  },
  cardPhoto: {
    height: 200,
  },
  textField: {
    width: 100,
    textAlign: "center",
    borderRadius: 20,
  },
  checkoutButton: {
    margin: 20,
  },
});
