import {StyleSheet,View} from 'react-native';
import {PaperProvider,Text} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Item from './Item';
import Cart from './Cart';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function ButtonPannel({route}){

    const { inputusername="", inputpassword="" } = route.params || {};

    return (
      <PaperProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Item") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "account" : "account-outline";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Item" component={Item} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen
            name="Profile"
            component={Profile}
            initialParams={{ inputusername, inputpassword }}
          />
        </Tab.Navigator>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({

})