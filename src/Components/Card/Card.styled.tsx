import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

export const CardContainer = styled(Animated.View)`
    flex: 1;
    position: relative;
    /* background: #fff; */
    padding-bottom: 5px ;
`;

export const Container = styled.TouchableOpacity`
    /* position: relative; */
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    background: green;
    
`

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: "#fff";
  
`;

export const PokemonName = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: "#fff";
  
`;

export const PokemonImage = styled.Image`
    margin-top: -40px;
  width: 130px;
  height: 130px;
`

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View`
    width: 70px;
    height: 30px;
    background: white;
    opacity:0.5;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
  
`;

export const PokemonTypeText = styled.Text`
    color: #474747;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
    text-transform: capitalize;
  
`;