import{StyleSheet,View,ScrollView} from 'react-native';
import {PaperProvider, Text, Button, TextInput} from 'react-native-paper';
export default function Signup(){
    return (
      <PaperProvider>
        <ScrollView>
          <View style={styles.container}>

          </View>
        </ScrollView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffa500",
    width: "100%",
    height: 900,
  },
});