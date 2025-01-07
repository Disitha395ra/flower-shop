import {StyleSheet,ScrollView,View} from 'react-native';
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import React from 'react';
import { TouchableOpacity } from "react-native";
export default function Login({route, navigation}){

    const {username, password} = route.params;
    const [inputusername, setusername] = React.useState("");
    const [inputpassword, setpassword] = React.useState("");

    const handlelogin=()=>{
      if(inputusername=="" || inputpassword==""){
        alert("Please fill all the fields")
      }
      if(inputusername !==username ||  inputpassword!== password){
        alert("Invalid Username and Password")
      }
      navigation.navigate("Dashboard",{username,password});
    }


    return (
      <PaperProvider>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logintext}>Login Here</Text>
            <TextInput
              label="Username"
              value={inputusername}
              onChangeText={(text) => setusername(text)}
              style={styles.username}
            />
            <TextInput
              label="password"
              value={inputpassword}
              onChangeText={(text) => setpassword(text)}
              style={styles.password}
              secureTextEntry={true}
            />
            <Button
              icon="account-reactivate"
              mode="contained"
              onPress={handlelogin}
              style={styles.loginbutton}
            >
              Login Here
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
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