import { useEffect, useState } from "react";
import { EggGroup, Gender, PokemonAbout, PokemonDetail } from "../../../Modules/domain/Pokemon";
import { Text, View } from "react-native";
import { usePokemon } from "../../../Hooks/usePokemon";
import { AboutIcon, Icon, Section, SectionContent, SectionIcon, SectionSubtitle, SectionText, SectionTitle, ShadowContainer } from "./About.styled";

import { removeEscapeCharacters } from "../../../Utils/utils";
import getPokemonGenderStats from "../../../Utils/getPokemonGenderStats";

// Assets
import heightIcon from "../../../Assets/Img/heightIcon.png"
import weightIcon from "../../../Assets/Img/weightIcon.png"
import femaleIcon from "../../../Assets/Img/female.png";
import maleIcon from "../../../Assets/Img/male.png";


const AboutModule = ({ pokemon }: any) => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail>(pokemon)
    const [pokemonSpecie, setPokemonSpecie] = useState<PokemonAbout>()
    const [pokemonGendersRate, setPokemonGenderRate] = useState<Gender[]>()
    const {
        getPokemonAbout
    } = usePokemon();

    const getPokemonInfo = async (id: string) => {
        const pokemonInfo = await getPokemonAbout(id)
        if (pokemonInfo) {
            setPokemonSpecie(pokemonInfo);
            setPokemonGenderRate(getPokemonGenderStats(pokemonInfo.gender_rate))
        }
    }

    useEffect(() => {
        if (pokemon) {
            getPokemonInfo(pokemon.order)
        }
    }, [pokemon])

    return (
        <>
            <Section>
                {pokemonSpecie && (
                    <Text>{removeEscapeCharacters(pokemonSpecie.flavor_text_entries[0].flavor_text)}</Text>
                )}
            </Section>
            <Section>
                <ShadowContainer>
                    <View style={{ alignItems: "center", width: 100 }}>
                        <Text style={{ marginBottom: 8 }}>
                            Height
                        </Text>

                        <SectionText>
                            <AboutIcon source={heightIcon} />{" "}
                            <Text>{pokemonDetails?.height} m</Text>
                        </SectionText>
                    </View>

                    <View style={{ alignItems: "center", width: 100 }}>
                        <Text style={{ marginBottom: 8 }}>
                            Weight
                        </Text>

                        <SectionText>
                            <AboutIcon source={weightIcon} />{" "}
                            <Text>{pokemonDetails?.weight} kg</Text>
                        </SectionText>
                    </View>
                </ShadowContainer>
            </Section>

            <Section>
                <SectionTitle>Training</SectionTitle>

                <SectionContent>
                    <SectionSubtitle>Growth Rate</SectionSubtitle>

                    <SectionText>{pokemonSpecie?.growth_rate.name}</SectionText>
                </SectionContent>

                <SectionContent>
                    <SectionSubtitle>Base EXP</SectionSubtitle>

                    <SectionText>{pokemon.base_experience}</SectionText>
                </SectionContent>
            </Section>

            <Section>
                <SectionTitle>Breeding</SectionTitle>

                <SectionContent>
                    <SectionSubtitle>Gender</SectionSubtitle>
                    {pokemonGendersRate?.map(gender => (
                        <View key={gender.gender} style={{ marginRight: 16 }}>
                            {gender.gender === 'genderless' ? (
                                <Text>Genderless</Text>
                            ) : (
                                <SectionIcon>
                                    <Icon
                                        source={
                                            gender.gender === 'male' ? maleIcon : femaleIcon
                                        }
                                    />
                                    <Text>{gender.rate}%</Text>
                                </SectionIcon>
                            )}
                        </View>
                    ))}

                </SectionContent>

                <SectionContent>
                    <SectionSubtitle>Egg Groups</SectionSubtitle>

                    {pokemonSpecie?.egg_groups.map((egg_group: EggGroup) => (
                        <SectionText key={egg_group.url} style={{ marginRight: 15, fontWeight: 500 }}>
                            {egg_group.name}
                        </SectionText>
                    ))}
                </SectionContent>
            </Section >
        </>

    )
}

export default AboutModule;