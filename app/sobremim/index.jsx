import React from 'react';
import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Header from '../../components/header';

const TelaInicio = () => {
    return (
        <View style={styles.container}>
            <Header title="Sobre Mim" voltarPara="./" />
            <View style={styles.content}>
                <Image
                    source={require("../../assets/images/lavinia.jpeg")}
                    style={styles.profileImage}
                />
                <Text style={styles.welcomeText}>Bem-vindo ao meu app</Text>
                <Text style={styles.descriptionText}>
                    Eu me chamo Lavínia Vecchia Rocha Moreira, tenho 17 anos e estudo o sesisenai. 
                    Moro com meus pais e uma linda cachorrinha chamada Charlotte. 
                    meus objetivo para os anos futuros é me formar na faculdade de biomedissina.
                </Text>
                <Link href="/sobremim/comidas">
                    <Pressable style={styles.Button} >VEJA AS COMIDAS QUE EU MAIS GOSTO</Pressable>
                </Link>
                <Link href="/sobremim/viagens">
                    <Pressable style={styles.Button} >VEJA ALGUMAS VIAGENS QUE FIZ ESTE ANO</Pressable>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 200,
        height: 300,
        marginBottom: 20,
        borderRadius: 50
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 20,
    }, 
    Button:{marginBottom:10,width:400,backgroundColor:"pink"}
});

export default TelaInicio;