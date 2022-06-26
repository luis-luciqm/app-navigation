import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Superior from './pages/Superior'
import Tecnico from './pages/Técnico'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === 'Superior'){
                        iconName = focused 
                        ? 'ios-information-circle' 
                        : 'ios-information-outline'; 
                    } else if (route.name === 'Tecnico'){
                        iconName = focused ? 'ios-list-circle' : 'ios-list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }, 
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="Superior" component={Superior} />
            <Tab.Screen name="Tecnico" component={Tecnico} />
        </Tab.Navigator>
    );
}