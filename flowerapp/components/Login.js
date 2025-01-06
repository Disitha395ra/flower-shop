import {StyleSheet,ScrollView,View} from 'react-native';
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import React from 'react';
export default function Login(){

    const [text, setText] = React.useState("");
    const [password, setpassword] = React.useState("");

    return (
      <PaperProvider>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logintext}>Login Here</Text>
            <TextInput
              label="Username"
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.username}
            />
            <TextInput
              label="password"
              value={password}
              onChangeText={(text) => setpassword(text)}
              style={styles.password}
              secureTextEntry={true}
            />
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.loginbutton}
            >
              Press me
            </Button>
          </View>
        </ScrollView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cd853f",
    width: "100%",
    height: 900,
  },
  logintext: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    top: 200,
    marginLeft: 75,
    textAlign: "center",
  },
  username: {
    position: "absolute",
    top: 300,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  password: {
    position: "absolute",
    top: 400,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  loginbutton:{
    position: "absolute",
    top: 500,
    marginLeft: 65,
    width: 300,
    height: 50,
  }
});