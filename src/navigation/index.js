import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screen
import HomeScreen from './../screens/Home';
import AboutScreen from './../screens/About';
import {ROUTE} from './typeRoute';


const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

// const AuthkNavigator = () => {
//     return (
//         <AuthStack.Navigator>
//         <AuthStack.Screen name="Login" component={LoginScreen} />
//         <AuthStack.Screen name="Signup" component={SignupScreen} />
//         </AuthStack.Navigator>
//     );
// }

const MainBottomTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
    return (
        <MainBottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === ROUTE.HOME) {
                        iconName = focused
                            ? 'home'
                            : 'home-circle-outline';
                    } else if (route.name === ROUTE.ABOUT) {
                        iconName = focused ? 'view-list' : 'format-list-bulleted';
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} color={color} size={size} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <MainBottomTab.Screen name="Home" component={HomeScreen} />
            <MainBottomTab.Screen name="About" component={AboutScreen} />
        </MainBottomTab.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                options={{ headerShown: false }}
                name="BottomTab" component={MainBottomTabNavigator} />
        </MainStack.Navigator>
    )
}


export default MainNavigator;