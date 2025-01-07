import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Signup({navigation}) {
  const [susername, setsusername] = React.useState("");
  const [spassword, setspassword] = React.useState("");
  const [confirmpassword, setconfirmpassword] = React.useState("");
  const [email, setemail] = React.useState("");

  const handlesignup = () =>{
    if(susername==="" || spassword==="" || email==="" || confirmpassword===""){
      alert("please fill all the fields");
      return;
    }
    if (spassword !== confirmpassword){
      alert("passwords do not match");
      return;
    } 
    navigation.navigate("Login",{username:susername,password:spassword});
  }


  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.sgintext}>Sign-Up Here</Text>

          <TextInput
            label="Username"
            value={susername}
            onChangeText={(text) => setsusername(text)}
            style={styles.username}
          />

          <TextInput
            label="User Email"
            value={email}
            onChangeText={(text) => setemail(text)}
            style={styles.email}
          />

          <TextInput
            label="Password"
            value={spassword}
            onChangeText={(text) => setspassword(text)}
            style={styles.password}
            secureTextEntry={true}
          />

          <TextInput
            label="Confirm Password"
            value={confirmpassword}
            onChangeText={(text) => setconfirmpassword(text)}
            style={styles.confirmpassword}
            secureTextEntry={true}
          />

          <Button
            icon="account-plus"
            mode="contained"
            onPress={handlesignup}
            style={styles.sginupbutton}
          >
            Sign-Up Here
          </Button>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.signupLink}
          >
            <Text style={styles.loginText}>
              Already have an account? Login here
            </Text>
          </TouchableOpacity>
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
  username: {
    position: "absolute",
    top: 330,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  password: {
    position: "absolute",
    top: 390,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  sgintext: {
    fontSize: 30,
    color: "black",
    position: "absolute",
    top: 200,
    marginLeft: 75,
    textAlign: "center",
  },
  sginupbutton: {
    position: "absolute",
    top: 530,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  loginText: {
    color: "black",
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 0,
    marginLeft: 35,
  },
  confirmpassword: {
    position: "absolute",
    top: 450,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  email: {
    position: "absolute",
    top: 270,
    marginLeft: 65,
    width: 300,
    height: 50,
  },
  signupLink: {
    position: "absolute",
    top: 600,
    marginLeft: 65,
  },
});
