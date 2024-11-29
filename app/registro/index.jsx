import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    input: {
        width: '80%',
        margin: 10,
        backgroundColor: 'lightpink', // Cor de fundo rosa claro para os inputs
        borderWidth: 1,
        borderColor: 'pink', // Borda rosa
        padding: 10,
        borderRadius: 5,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'lavender', // Fundo suave para o container
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'deeppink', // Título em rosa forte
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'deeppink', // Cor de fundo para o botão
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white', // Texto branco para o botão
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputText: {
        color: 'darkviolet', // Texto de input em um tom roxo-escuro
    }
})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha){
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
        if (!resposta) {
            console.log('erro')
        } else if (resposta.status == 200) {
            console.log('user criado com sucesso')
        } else {
            console.log('ocorreu um erro')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Insira seu email aqui'
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder='Insira seu nome aqui'
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder='Insira seu senha aqui'
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                />
            </View>
            <View>
                <Pressable style={styles.button} onPress={registrarUsuario}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
