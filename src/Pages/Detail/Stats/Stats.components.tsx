import { Text } from "react-native";
import { Stat } from "../../../Modules/domain/Pokemon";
import { Container, Section, StatGraph, StatLine, StatValue } from "./Stats.styled";

const StatsModule = ({ pokemon }: any) => {
    return (
        <>
            {pokemon.stats.map((stat: Stat) => (
                <Container key={stat.stat.url}>
                    <Text style={{ width: 129, fontWeight: 500, fontFamily: "monospace" }}>
                        {stat.stat.name}
                    </Text>
                    <StatGraph>
                        <Text style={{ width: 30, textAlign: 'right', fontWeight: 400 }}>
                            {stat.base_stat}
                        </Text>
                        <StatLine>
                            <StatValue width={stat.base_stat} />
                        </StatLine>
                    </StatGraph>
                </Container>
            ))}

            <Section>
                <Text style={{ marginTop: 8 }}>
                    {'The ranges shown on the right are for a level 100 Pokémon. ' +
                        'Maximum values are based on a beneficial nature, 252 EVs, 31 ' +
                        'IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.'}</Text>

            </Section>
        </>
    );
}

export default StatsModule;