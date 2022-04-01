import { View } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/home';
import Products from '../screens/products';
import Profile from '../screens/profile';
import cart from './cart';

const tabs = (props: any) => {
    const Tab = createBottomTabNavigator();
    
    return (
        <View style={{flex: 1}}>
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveBackgroundColor: 'lightgreen',
                tabBarActiveTintColor: 'orange',
                tabBarLabelStyle:{fontWeight: '700'}, 
                headerTitleStyle:{
                    fontSize: hp('3%'),
                    alignSelf: 'center',
                    fontWeight: '700',
                    color: '#a9a9a9'
                },
            }}
        >
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon :(color:any) => (
                <MaterialIcons name='home' style={{ color: '#1890ff' }} size={26}/>
                ),
            }}
            />
            <Tab.Screen
            name='Cart'
            component={cart}
            options={{
                tabBarLabel:'Cart',
                tabBarIcon :(color:any) => (
                <AntDesign name='shoppingcart' style={{ color: '#1890ff' }} size={26}/>
                )
            }}
            />
            <Tab.Screen
                name='Products'
                component={Products}
                options={{
                    tabBarLabel:'Products',
                    tabBarIcon :(color:any) => (
                    <AntDesign name='shoppingcart' style={{ color: '#1890ff' }} size={26}/>
                    )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel:' My Profile',
                    tabBarIcon :(color:any) => (
                    <AntDesign name='profile' style={{ color: '#1890ff' }} size={26}/>
                    )
                }}
            />
        </Tab.Navigator>
        </View>
    )
}

export default tabs;
