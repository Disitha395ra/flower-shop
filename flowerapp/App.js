import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {PaperProvider} from 'react-native-paper';
//import Home from './components/Home';
import Login from './components/Login';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <Login/>
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
