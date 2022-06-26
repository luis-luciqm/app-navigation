import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Details(props){
    console.log('\n\n\n\nsou euuuuu\n\n', props.route.params.name)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja muito bem vindo ao curso de {props.route.params.name}</Text>
            <Text style={styles.text}>{props.route.params.description}</Text>
            <Text style={styles.text}>{props.route.params.name} é um curso simplemente incrivel, matricule-se já</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 30
    }
});