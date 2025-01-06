import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {PaperProvider} from 'react-native-paper';
//import Home from './components/Home';
//import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <Signup/>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
