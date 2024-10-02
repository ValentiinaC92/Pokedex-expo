import { ActivityIndicator, Animated, Dimensions, ScrollView, Text, View } from "react-native"
import { usePokemon } from "../../Hooks/usePokemon";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PokemonDetail } from "../../Modules/domain/Pokemon";
import { Content, ContentImage, DetailContainer, Header, PokemonId, PokemonImage, PokemonName, PokemonStyledName, PokemonType, PokemonTypeContainer, PokemonTypeText, Row } from "./Detail.styled";
import Tabs from "./Tabs/Tabs.component";
import getColorByPokemonType from "../../Utils/getColorByPokemonType";

const Detail = ({ route }: any) => {
    const { name, url } = route.params;
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail>()
    const scrollViewRef = useRef<ScrollView>(null);
    const translateX = useMemo(() => new Animated.Value(0), []);
    const { width } = Dimensions.get('window');
    const {
        getPokemonDetails,
        isLoading
    } = usePokemon();

    const getPokemonInfo = async (url: string) => {
        const pokemonInfo = await getPokemonDetails(url)
        if (pokemonInfo)
            setPokemonDetails(pokemonInfo)
    }

    useEffect(() => {
        if (url) {
            getPokemonInfo(url)
        }
    }, [url])

    const backgroundColor = useMemo(() => {
        if (pokemonDetails?.types) {

            return getColorByPokemonType(pokemonDetails?.types[0].type.name)
        }
    },
        [pokemonDetails?.types],
    );

    return (
        <>
            {isLoading ? (
                <View style={{ marginTop: 300 }}>
                    <ActivityIndicator size={"large"} />
                </View>) :
                (
                    <ScrollView style={{ flex: 1, backgroundColor: backgroundColor }}>
                        <Header style={{ backgroundColor }} >
                            <PokemonId>#{pokemonDetails?.order}</PokemonId>
                            <PokemonName>{name}</PokemonName>
                            <PokemonStyledName>
                                {name.toUpperCase()}
                            </PokemonStyledName>
                        </Header>
                        <DetailContainer style={{
                            backgroundColor,
                        }}>
                            <Content>
                                <Row style={{ marginTop: 16 }}>
                                    <PokemonTypeContainer>
                                        {pokemonDetails?.types.map(({ type }: any) => (
                                            <PokemonType key={type.name} >
                                                <PokemonTypeText>{type.name}</PokemonTypeText>
                                            </PokemonType>
                                        ))}
                                    </PokemonTypeContainer>
                                </Row>
                            </Content>
                            <ContentImage>
                                <PokemonImage
                                    source={{
                                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`,
                                    }}
                                />
                            </ContentImage>
                        </DetailContainer>
                        {pokemonDetails && (
                            <Tabs pokemonDetail={pokemonDetails} />
                        )}
                    </ScrollView>
                )
            }
        </>
    )
}

export default Detail