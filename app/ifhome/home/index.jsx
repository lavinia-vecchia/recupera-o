import React, { useContext, useState, useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native-web";
import { AppContext, AppProvider } from "../../../scripts/appContext";
import { Link } from "expo-router";

const produtos = [
    {
        id: '1',
        nome: 'Pizza gigante de Calabresa',
        estabelecimento: 'Parma pizza',
        preco: 34.50,
        imagem: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg',
    },
    {
        id: '2',
        nome: 'Combo 30 peças PREMIUM',
        estabelecimento: 'UNKAI',
        preco: 59.90,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8rQ2hafyB74b4-5r3y6FcIUFWujEv7QiUA&s',
    },
];

export default function App() {
    const { cart, setCart } = useContext(AppContext)
    const [cartLenght, setCartLength] = useState(0)

    function pushCart(item) {
        setCart([...cart, item])
    }

    useEffect(() => { if (cart.length) { setCartLength(cart.length); } console.log(cart.length) }, [cart])

    const renderItem = ({ item }) => (
        <View style={styles.produtoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoEstabelecimento}>{item.estabelecimento}</Text>
                <Text style={styles.produtoPreco}>R${item.preco.toString().replace('.', ',')}</Text>
                <Pressable style={styles.comprarButton} onPress={() => pushCart(item)}>
                    <Text style={styles.comprarButtonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>iFome</Text>
            </View>
            <View style={styles.carrinho}>
                <Link href={'/ifhome/carrinho'}><Image
                    source={require('../../../assets/images/cart.png') }
                    style={styles.carrinhoImagem}
                /></Link>

                <Text style={styles.carrinhoTexto}>{`${cartLenght} produtos`}</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
    },
    carrinho: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'pink',
        justifyContent: 'flex-end'
    },
    carrinhoImagem: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    carrinhoTexto: {
        fontSize: 16,
    },
    flatList: {
        marginTop: 10,
    },
    produtoContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'pink',
        alignItems: 'center',
    },
    produtoImagem: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
    },
    produtoNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    produtoEstabelecimento: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },
    comprarButton: {
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 5,
    },
    comprarButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});