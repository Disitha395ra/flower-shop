import {StyleSheet,View} from 'react-native';
import {PaperProvider,Text} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Item from './Item';
import Cart from './Cart';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function ButtonPannel({route}){

    const {username,password} = route.params;

    return(
        <View>
            <Text>ButtonPannel</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})