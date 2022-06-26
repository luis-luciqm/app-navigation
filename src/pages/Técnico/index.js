import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Tecnico(){
    return (
        <View style={styles.containertecnico}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text>Informática</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text>Apicultura</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text>Alimentos</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    containertecnico: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 20
      },
});
