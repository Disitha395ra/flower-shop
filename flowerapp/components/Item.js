import { StyleSheet, ScrollView } from "react-native";
import {
  PaperProvider,
  Text,
  Button,
  TextInput,
  Avatar,
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
    navigation.navigate("Cart", { cart });
  };

  return (
    <PaperProvider>
      <ScrollView>
        {flowers.map((flower) => (
          <Card key={flower.id} style={styles.cardcomponent}>
            <Card.Content>
              <Text variant="titleLarge">Name - {flower.name}</Text>
              <Text variant="bodyMedium">Price - {flower.price}</Text>
            </Card.Content>
            <Card.Cover source={flower.img} style={styles.cardphoto} />
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
                style={styles.textfield}
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
  cardcomponent: {
    margin: 10,
    padding: 10,
  },
  cardphoto: {
    position: "relative",
    height: 500,
  },
  textfield: {
    width: 100,
    alignContent: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  checkoutButton: {
    margin: 20,
  },
});
