import { Animated, Dimensions, ScrollView, Text } from "react-native";
import AboutModule from "../About/About.component";
import StatsModule from "../Stats/Stats.components";
import EvolutionModule from "../Evolution/Evolution.components";
import { SlideWrapper, TabButton, TabsContainer, TabsContent } from "../Detail.styled";
import { useCallback, useMemo, useRef, useState } from "react";
import { PokemonDetail } from "../../../Modules/domain/Pokemon";

type DetailsProps = {
    pokemonDetail: PokemonDetail;
};

const Tabs = ({ pokemonDetail }: DetailsProps) => {
    const translateX = useMemo(() => new Animated.Value(0), []);
    const [currentTab, setCurrentTab] = useState("About");

    const tabs = [
        { name: 'About', slide: AboutModule },
        { name: 'Base Stats', slide: StatsModule },
        { name: 'Evolution', slide: EvolutionModule },
    ];

    const handleChangeSlide = useCallback((index: string) => {
        setCurrentTab(index)
    }, []);

    return (
        <TabsContainer >
            <TabsContent>
                {tabs.map((tab, index) => {
                    return (
                        <TabButton key={index} onPress={() => handleChangeSlide(tab.name)} show={currentTab === tab.name}>
                            <Text>
                                {tab.name}
                            </Text>
                        </TabButton>
                    );
                })}
            </TabsContent>
            {tabs.map(({ name, slide: Slide }, index) => (
                currentTab === name && (
                    <SlideWrapper key={index}>
                        <Slide pokemon={pokemonDetail} />
                    </SlideWrapper>
                )

            ))}

        </TabsContainer>
    )
}

export default Tabs;