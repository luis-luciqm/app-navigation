import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Superior(){
    return (
        <View style={styles.container}>
            <TouchableOpacity   
                style={styles.button}
            >
                <Text>Análise e Desenvolvimento de Sistemas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text>Agroindústria</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text>Química</Text>
            </TouchableOpacity>

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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20
  },
});