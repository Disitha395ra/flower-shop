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
import {flowers} from '../data/FlowerDB'

import React from "react";

export default function Item({route, navigation}){
//const [count, setCount] = React.useState(0);
const [counts, setCounts] = React.useState(
  Object.fromEntries(flowers.map((flower) => [flower.id, 0]))
);
const handleplus = (id) => {
   setCounts((prevCounts) => {
     const updatedCounts = { ...prevCounts };
     updatedCounts[id] += 1; 
     return updatedCounts; 
   });
}

const handleminus = (id) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      updatedCounts[id] = Math.max(0, updatedCounts[id] - 1); 
      return updatedCounts; 
    });
}

const handleaddtocart =(id)=>{
   if (counts[id] > 0) {
     navigation.navigate("Cart", { id, count: counts[id] });
   }
  
}


    return (
      <PaperProvider>
        <ScrollView>
          {flowers.map((flower, id) => (
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
                  onPress={() => handleplus(flower.id)}
                />
                <TextInput
                  label="Count"
                  value={counts[flower.id].toString()}
                  onChangeText={(text) => setCounts(text)}
                  editable={false}
                  style={styles.textfield}
                />
                <IconButton
                  icon="minus"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() => handleminus(flower.id)}
                />
                <Button
                  icon="cart-plus"
                  mode="contained"
                  onPress={() => handleaddtocart(flower.id)}
                >
                  Add to Cart
                </Button>
              </Card.Actions>
            </Card>
          ))}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textDecorationLine: "none",
  },
});