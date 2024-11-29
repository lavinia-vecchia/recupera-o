import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const viagens = [
  { id: '1', title: 'São Paulo', year: 2024, image: 'https://www.alugavel.com.br/blog/wp-content/uploads/2017/07/feira-da-madrugada2.jpg' },
  { id: '2', title: 'Rio grande do sul', year: 2023, image: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2022/08/Gramado-O-que-Fazer-Passeios-1.jpg' },
  { id: '3', title: 'Curitiba', year: 2024, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsPORLUVXGE6NoojnMlUazJwbF8nk8BB5EQ&s' },
];

const TelaViagens = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Viagens" voltarPara="/sobre-mim" />
      <FlatList
        data={viagens}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title} - {item.year}</Text>
          </View>
        )}
      />
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

export default TelaViagens;