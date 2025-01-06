import {StyleSheet,View,ScrollView} from 'react-native';
import {Paperprovider} from 'react-native-paper';
export default function Home(){
    return (
      <Paperprovider>
        <ScrollView>
          <View>
            <Text>Home</Text>
          </View>
        </ScrollView>
      </Paperprovider>
    );
}

const styles = StyleSheet.create({

})