import { StyleSheet, ScrollView, Image, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function Profile({ route }) {
  // Destructure route params with fallback values
  const { inputusername = "Guest", inputpassword = "Not Provided" } =
    route.params || {};

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Image */}
        <Image
          style={styles.profileImage}
          source={require("../assets/profile.png")}
        />
        {/* User Information */}
        <View style={styles.infoContainer}>
          <Text variant="titleLarge" style={styles.text}>
            Username: {inputusername}
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            Password: {inputpassword}
          </Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
  }
});