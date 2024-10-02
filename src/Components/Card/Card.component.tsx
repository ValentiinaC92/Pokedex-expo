import { Text } from "react-native"
import { PokemonCard, PokemonDetail } from "../../Modules/domain/Pokemon"
import { useEffect, useMemo, useState } from "react"
import { usePokemon } from "../../Hooks/usePokemon"
import { CardContainer, Container, LeftSide, PokemonContentType, PokemonId, PokemonImage, PokemonName, PokemonType, PokemonTypeText, RightSide } from "./Card.styled"
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { MainStackScreenProps } from "../../Modules/domain/Navigators"
import getColorByPokemonType from "../../Utils/getColorByPokemonType"

const Card = ({ url, name }: PokemonCard) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const navigator = useNavigation<MainStackScreenProps<"Homepage">["navigation"]>();
    const {
        getMorePokemon
    } = usePokemon();

    const getPokemonDetail = async (url: string) => {
        const pokemonDetail = await getMorePokemon(url)
        if (pokemonDetail) {
            setPokemon(pokemonDetail)
        }
    }

    useEffect(() => {
        if (url) {
            getPokemonDetail(url)
        }
    }, [url])

    const backgroundColor = useMemo(() => {
        if (pokemon?.types) {

            return getColorByPokemonType(pokemon?.types[0].type.name)
        }
    },
        [pokemon?.types],
    );

    return (
        <CardContainer >
            <Container onPress={() => navigator.navigate("Detail", { name, url })} style={{ backgroundColor }} >
                <LeftSide>
                    <PokemonId>#{pokemon?.order}</PokemonId>
                    <PokemonName>{name}</PokemonName>
                    <PokemonContentType>
                        {pokemon?.types.map((pokemonType) => (
                            <PokemonType
                                key={pokemonType.type.name}
                            >
                                <PokemonTypeText key={pokemonType.type.name}>
                                    {pokemonType.type.name}
                                </PokemonTypeText>
                            </PokemonType>
                        ))}
                    </PokemonContentType>
                </LeftSide>
                <RightSide>
                    <PokemonImage
                        source={{ uri: pokemon?.sprites.other["official-artwork"].front_default }}
                    />
                </RightSide>


            </Container>
        </CardContainer>
    )

}

export default Card