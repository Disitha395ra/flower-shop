import {StyleSheet,View,ScrollView,Image} from 'react-native';
import { PaperProvider, Text,Button } from "react-native-paper";
export default function Home(){
    return (
      <PaperProvider>
        <ScrollView>
          <View>
            <Image
              source={require("../assets/Home.jpg")}
              style={styles.homebanner}
            />
            <Text style={styles.hometext}>Welcome To Flowers</Text>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.homebutton}
            >
              Press me
            </Button>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.homebutton}
            >
              Press me
            </Button>
          </View>
        </ScrollView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  homebanner: {
    width: "100%",
    height: 900,
  },
  hometext: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    top: 300,
    marginLeft: 75,
    textAlign: "center",
  },
  homebutton:{
    position: "absolute",
    top: 400,
    marginLeft: 65,
    width: 300,
    height: 50,
    
  }
});