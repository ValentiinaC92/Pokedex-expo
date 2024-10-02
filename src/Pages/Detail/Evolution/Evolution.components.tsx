
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { ContainerPokemon, PokemonImg, PokemonSection, Section } from "./Evolution.styled";
import { usePokemon } from "../../../Hooks/usePokemon";
import { PokemonAbout, PokemonDetail } from "../../../Modules/domain/Pokemon";

const EvolutionModule = ({ pokemon }: any) => {
    const [pokemonSpecie, setPokemonSpecie] = useState<PokemonAbout>()
    const [pokemonEvolution, setPokemonEvolution] = useState<PokemonDetail>()
    const [latestEvolution, setLatestEvolution] = useState<PokemonDetail>()
    const [pokemonSecondEvolution, setPokemonSecondEvolution] = useState<PokemonDetail>()
    const {
        getPokemonEvolution,
        getPokemonAbout,
        getMorePokemon,
        getPokemon
    } = usePokemon();

    const getPokemonEvol = async (url: string) => {

        const pokemonEvol = await getPokemonEvolution(url)
        if (pokemonEvol) {
            setPokemonEvolution(await getPokemon(pokemonEvol?.chain.species.name))
            setPokemonSecondEvolution(await getPokemon(pokemonEvol.chain.evolves_to[0].species.name))
            setLatestEvolution(await getPokemon(pokemonEvol.chain.evolves_to[0]?.evolves_to[0]?.species.name))
        }
    }

    const getPokemonInfo = async (id: string) => {
        const pokemonInfo = await getPokemonAbout(id)
        if (pokemonInfo) {
            setPokemonSpecie(pokemonInfo);
        }
    }

    useEffect(() => {
        if (pokemon) {
            getPokemonInfo(pokemon.id)
        }
    }, [pokemon])

    useEffect(() => {
        if (pokemonSpecie) {
            getPokemonEvol(pokemonSpecie.evolution_chain.url)
        }
    }, [pokemonSpecie])

    const getPokemonDetail = async (url: string) => {
        const pokemonInfo = await getMorePokemon(url)
        if (pokemonInfo) {
            return pokemonInfo
        }
    }

    return (
        <>
            <Section>
                <Text style={{ color: "#1c1c1d", fontSize: 24, fontWeight: 700 }}>Evolution Chain</Text>
            </Section>

            <PokemonSection>
                {pokemonEvolution && (
                    <ContainerPokemon>
                        <PokemonImg
                            source={{ uri: pokemonEvolution?.sprites?.other["official-artwork"].front_default }}
                        />
                        <Text style={{ color: "#94939b", fontSize: 18 }}>#{pokemonEvolution.order}</Text>
                        <Text style={{ color: "#1c1c1d", fontSize: 24, fontWeight: 700 }}>{pokemonEvolution.name}</Text>
                    </ContainerPokemon>
                )}
                <ContainerPokemon>
                    {pokemonSecondEvolution && (
                        <>

                            <PokemonImg
                                source={{ uri: pokemonSecondEvolution?.sprites.other["official-artwork"].front_default }}
                            />
                            <Text style={{ color: "#94939b", fontSize: 18 }}>#{pokemonSecondEvolution.order}</Text>
                            <Text style={{ color: "#1c1c1d", fontSize: 24, fontWeight: 700 }}>{pokemonSecondEvolution.name}</Text>
                        </>
                    )}
                </ContainerPokemon>
            </PokemonSection>
            <PokemonSection>

                <ContainerPokemon>
                    {latestEvolution && (
                        <>
                            <PokemonImg
                                source={{ uri: latestEvolution?.sprites.other["official-artwork"].front_default }}
                            />
                            <Text style={{ color: "#94939b", fontSize: 18 }}>#{latestEvolution.order}</Text>
                            <Text style={{ color: "#1c1c1d", fontSize: 24, fontWeight: 700 }}>{latestEvolution.name}</Text>
                        </>
                    )}
                </ContainerPokemon>

            </PokemonSection>
        </>
    )
}

export default EvolutionModule;