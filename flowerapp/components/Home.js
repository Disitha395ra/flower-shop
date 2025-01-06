import {StyleSheet,View,ScrollView,Image} from 'react-native';
import {Paperprovider} from 'react-native-paper';
export default function Home(){
    return (
      <Paperprovider>
        <ScrollView>
          <View>
            <Image
                source={require('../assets/Home.jpg')}
            />
          </View>
        </ScrollView>
      </Paperprovider>
    );
}

const styles = StyleSheet.create({

})