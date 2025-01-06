import {StyleSheet,ScrollView,View} from 'react-native';
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
export default function Login(){
    return(
        <PaperProvider>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.logintext}>Login Here</Text>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cd853f",
    width: "100%",
    height: 900,
  },
  logintext:{
    fontSize: 30,
    color: "white",
    position: "absolute",
    top: 300,
    marginLeft: 75,
    textAlign: "center",
  }
});