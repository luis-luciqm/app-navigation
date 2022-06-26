import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Tecnico({navigation}){

    const object_cursos = [
        {
            name: 'Informática',
            description: 'Além de ser o melhor curso integrado, informática pode te levar a lugares onde nunca ninguém levou',
        },
        {
            name: 'Apicultura',
            description: 'Curso que mexe com abelhas, fica todo aferroado, não recomendo pra ninguém',
        },
        {
            name: 'Alimentos',
            description: 'Ensina a fritar ovo, recomendo pra quem quer ir pro masterchaf',
        },
    ]

    return (
        <View style={styles.containertecnico}>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[0])}
            >
                <Text>Informática</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[1])}
            >
                <Text>Apicultura</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('details', object_cursos[2])}
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
