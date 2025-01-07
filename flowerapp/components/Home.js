import {StyleSheet,View,ScrollView,Image} from 'react-native';
import { PaperProvider, Text,Button } from "react-native-paper";
export default function Home({navigation}){
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
              icon="account"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
              style={styles.homebuttonlogin}
            >
              Login Here
            </Button>
            <Button
              icon="account-plus"
              mode="contained"
              onPress={() => navigation.navigate("Signup")}
              style={styles.homebuttonsginip}
            >
              Sign Up Here
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
  homebuttonlogin: {
    position: "absolute",
    top: 400,
    marginLeft: 65,
    width: 300,
    height: 50,
    backgroundColor: "#32cd32",
  },
  homebuttonsginip: {
    position: "absolute",
    top: 500,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
});