import { Text } from "react-native";
import styled from "styled-components/native";

export const AboutSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeightSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;
export const WeightSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const PokemonSeparator = styled.View`
  width: 1px;
  height: 48px;
  background: #e0e0e0;
`;

export const AboutIcon = styled.Image`
  margin-right: 20px;
`;

export const PokemonHeightValue = styled.Text`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #212121;
`;

export const PokemonAboutText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 12px;
  color: #666666;
`;

export const PokemonWeightValue = styled.Text`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #212121;
`;

export const AbilityBox = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Ability = styled.Text`
  
    padding: 5px 20px;
    text-transform: capitalize;
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #212121;
  
`;

export const Section = styled.View`
  margin-bottom: 30px;
`;

export const ShadowContainer = styled.View`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  flex-direction: row;
  justify-content:center;
  width: 100%;
`;

export const SectionSubtitle = styled(Text)`
  width: 100px;
  color: 'grey';
`;

export const SectionText = styled(Text)`
  text-align: center;
  justify-content: space-between;
  font-weight: 700;
`;

export const SectionTitle = styled(Text)`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SectionContent = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

export const SectionIcon = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`