import axios from "axios";
import { useState } from "react";

export const usePokemon = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getPokemonsList = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/',
            };

            const pokemonsList = await axios.request(options)
            setIsLoading(false);
            return pokemonsList.data;
        } catch (error) {
            console.log(error)
        }
    };

    const getPokemon = async (name: string) => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}/`,
            };

            const pokemons = await axios.request(options)
            setIsLoading(false);
            return pokemons.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getMorePokemon = async (url: string) => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: url,
            };

            const pokemonsList = await axios.request(options)
            setIsLoading(false);
            return pokemonsList.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonDetails = async (url: string) => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: url,
            };

            const pokemonDetail = await axios.request(options)
            setIsLoading(false);
            return pokemonDetail.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonAbout = async (id: string) => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
            };

            const pokemonsAbout = await axios.request(options)
            setIsLoading(false);
            return pokemonsAbout.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonEvolution = async (url: string) => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                url: url,
            };

            const pokemonsEvolution = await axios.request(options)
            setIsLoading(false);
            return pokemonsEvolution.data;
        } catch (error) {
            console.log(error)
        }
    }

    return {
        isLoading,
        getPokemon,
        getPokemonsList,
        getMorePokemon,
        getPokemonDetails,
        getPokemonAbout,
        getPokemonEvolution
    }
}