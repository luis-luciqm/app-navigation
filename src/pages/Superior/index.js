import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Superior({navigation}){

    const object_cursos = [
        {
            name: 'Análise e Desenvolvimento de Sistemas',
            description: 'Com nota máxima no ENADE, o curso de Análise e Desenvolvimento de Sistemas demonstra cada dia ser o melhor curso do IF',
        },
        {
            name: 'Agroindustria',
            description: 'Iniciando em 2022, o curso de Agroindustria tem a função de plantar plantas e só',
        },
        {
            name: 'Quimica',
            description: 'Quimica é foda, não recomendo',
        },
    ]

    return (
        <View style={styles.container}>
            <TouchableOpacity   
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[0])}
            >
                <Text>Análise e Desenvolvimento de Sistemas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[1])}
            >
                <Text>Agroindústria</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[2])}
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