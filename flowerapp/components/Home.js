import {StyleSheet,View,ScrollView,Image} from 'react-native';
import {PaperProvider} from 'react-native-paper';
export default function Home(){
    return (
      <PaperProvider>
        <ScrollView>
          <View>
            <Image
                source={require('../assets/Home.jpg')}
            style={styles.homebanner}/>
          </View>
        </ScrollView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  homebanner:{
    width:"100%",
    height:900,
  }
});