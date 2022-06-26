import React from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/Home'

const Tab = createBottomTabNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}