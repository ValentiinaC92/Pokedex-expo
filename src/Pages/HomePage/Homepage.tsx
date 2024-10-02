import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../../Components/Header/Header.component';

import { Pokemon } from '../../Modules/domain/Pokemon';
import { usePokemon } from '../../Hooks/usePokemon';
import Card from '../../Components/Card/Card.component';

const Homepage = () => {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([])
  const [nextPokemon, setNextPokemon] = useState<string>("");
  const {
    getPokemonsList,
    getMorePokemon
  } = usePokemon();

  const getPokemon = async () => {
    const pokemon = await getPokemonsList();
    if (pokemon) {
      setNextPokemon(pokemon.next);
      setListPokemon(pokemon.results);
    }
  }

  const loadMorePokemon = async () => {
    if (nextPokemon) {
      const morePokemon = await getMorePokemon(nextPokemon)
      if (morePokemon) {
        setListPokemon([...listPokemon, ...morePokemon.results])
        setNextPokemon(morePokemon.next)
      }
    }
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flexList}
        data={listPokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card key={item.name} url={item.url} name={item.name} />
        )}
        onEndReached={loadMorePokemon}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 30
  },
  flexList: {
    flex: 1,
    marginTop: 8,
  }
});

export default Homepage