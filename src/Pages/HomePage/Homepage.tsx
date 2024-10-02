import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Card from '../../Components/Card/Card.component';

import { Pokemon } from '../../Modules/domain/Pokemon';
import { usePokemon } from '../../Hooks/usePokemon';

const Homepage = () => {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([])
  const [nextPokemon, setNextPokemon] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadingInitalData, setLoadingInitialData] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    getPokemonsList,
    getMorePokemon
  } = usePokemon();

  const getPokemon = async () => {
    await getPokemonsList().then((pokemon) => {
      if (pokemon) {
        setNextPokemon(pokemon.next);
        setListPokemon(pokemon.results);
      }
    });
  }

  const loadMorePokemon = async () => {
    if (loading) return;
    if (nextPokemon) {
      setLoading(true);
      await getMorePokemon(nextPokemon).then((morePokemon) => {
        setListPokemon((prev) => [...prev, ...morePokemon.results])
        setNextPokemon(morePokemon.next)
        setLoading(false);
      })

    }
  }

  useEffect(() => {
    getPokemon();
  }, [])

  const refreshList = useCallback(async () => {
    setRefreshing(true);
    await getPokemon();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flexList}
        data={listPokemon}
        keyExtractor={(item) => String(item.name)}
        onEndReached={() => loadMorePokemon()}
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({ item, index }) => (
          <Card key={index} url={item.url} name={item.name} />
        )}
        ListFooterComponent={() => loading ? <ActivityIndicator /> : ""}
      ></FlatList>
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