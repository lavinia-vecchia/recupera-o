import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const comidas = [
  { title: 'Sushi', image: 'https://www.nutrimixassessoria.com.br/wp-content/uploads/2019/01/e-seguro-comer-sushi-conheca-os-riscos-da-comida-japonesa.jpg' },
  { title: 'Pizza', image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/10/dia-da-pizza-skkhweuqjcrq.jpg' },
  { title: 'Poke', image: 'https://www.clickcamboriu.com.br/wp-content/uploads/2024/08/Big-Poke-3072x2048.jpg' },
  { title: 'Carbonara', image: 'https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receitas-spaguetti-a-carbonara-1.jpg' },

];

const Telacomidas = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Filmes" voltarPara="/sobre-mim" />
      <ScrollView>
        {filmes.map((filme, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: filme.image }} style={styles.image} />
            <Text style={styles.title}>{filme.title}</Text>
            <Text>{filme.year}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '768',
    height: 819,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaFilmes;
