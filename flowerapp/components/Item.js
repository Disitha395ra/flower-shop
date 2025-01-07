import { StyleSheet, ScrollView } from "react-native";
import {
  PaperProvider,
  Text,
  Button,
  TextInput,
  Avatar,
  Card,
} from "react-native-paper";
import {flowers} from '../data/FlowerDB'
export default function Item(){
    return (
      <PaperProvider>
        <ScrollView>
            {flowers.map((flower, id) => (
               <Card key={flower.id} style={styles.cardcomponent}>
                 <Card.Content>
                   <Text variant="titleLarge">Name - {flower.name}</Text>
                   <Text variant="bodyMedium">Price - {flower.price}</Text>
                 </Card.Content>
                 <Card.Cover source={flower.img}  style={styles.cardphoto}/>
                 <Card.Actions>
                   <Button
                     icon="cart-plus"
                     mode="contained"
                     onPress={() => console.log("Pressed")}
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
  }
});