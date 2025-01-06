import {StyleSheet,ScrollView,View} from 'react-native';
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import React from 'react';
import { TouchableOpacity } from "react-native";
export default function Login(){

    const [username, setusername] = React.useState("");
    const [password, setpassword] = React.useState("");

    return (
      <PaperProvider>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logintext}>Login Here</Text>
            <TextInput
              label="Username"
              value={username}
              onChangeText={(text) => setusername(text)}
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
              icon="account-reactivate"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.loginbutton}
            >
              Login Here
            </Button>
            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={styles.signupLink}
            >
              <Text style={styles.signupText}>
                Don't have an account? Sign up here
              </Text>
            </TouchableOpacity>
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
  loginbutton: {
    position: "absolute",
    top: 500,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  signupText: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 550,
    marginLeft: 95,
  },
});