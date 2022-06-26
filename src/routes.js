import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home'
import Teste from './pages/Teste'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Teste" component={Teste} />
        </Tab.Navigator>
    );
}