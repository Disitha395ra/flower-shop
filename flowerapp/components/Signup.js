import{StyleSheet,View,ScrollView} from 'react-native';
import {PaperProvider, Text, Button, TextInput} from 'react-native-paper';
import React from 'react';
import { TouchableOpacity } from 'react-native';
export default function Signup(){

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
    backgroundColor: "#ffa500",
    width: "100%",
    height: 900,
  },
});