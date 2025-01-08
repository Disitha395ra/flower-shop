import { StyleSheet, ScrollView } from "react-native";
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
export default function Cart({route}) {
  const {id, counts} = route.params;
  return (
    <PaperProvider>
      <ScrollView>
        <Text>Hiii</Text>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
