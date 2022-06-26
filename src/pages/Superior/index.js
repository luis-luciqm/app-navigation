import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Superior({navigation}){

    const object_cursos = {
        name: "ADS"
    };

    // function navigationDetails(){
    //     navigation.navigate('details', {curso: "sssj"})
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity   
                style={styles.button}
                onPress={ () => navigation.navigate('details', {object_cursos})}
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