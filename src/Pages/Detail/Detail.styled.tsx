import { Animated, Dimensions } from "react-native";
import styled from "styled-components/native";
const { height } = Dimensions.get('window');

export const Header = styled.View`
    background-color: red;
    height: 200px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  
`;

export const PokemonId = styled.Text`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 50px;
    left: 350px;
`;

export const PokemonName = styled.Text`
  
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;

    line-height: 38px;
    color: #fff;
    position: absolute;
    top: 40px;
    left: 40px;

`;

export const PokemonStyledName = styled.Text`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 119px;
  top: 50px;
  left: -25px;
  color: rgba(255, 255, 255, 0.1);
`;

export const ContentImage = styled.View`
   /* margin-top: 24px; */
  align-items: center;
  z-index: 3;
`;

export const PokemonImage = styled.Image`
margin-top: -70px;
  width: 200px;
  height: 200px;
  margin-bottom: -30px;
  z-index: 3;
`;

export const DetailContainer = styled.View`
    flex: 1;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonTypeContainer = styled.View`
margin-top: -120px;
  flex-direction: row;
  justify-content: end;
  width: 100%;
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
`;

export const Title = styled.Text`
 
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 20px;
    color: blue;
  
`;

export const TabsContainer = styled(Animated.View)`
  background: #f1e3e3;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 0;
  z-index: -1;
`;

export const TabsContent = styled.View`
  padding: 16px 0 24px;
  margin: 0 24px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TabButton = styled.TouchableOpacity<{ show?: boolean }>`
  height: 35px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-bottom-width:  ${props => props.show ? "1px" : "0px"};
  border-style: solid;
  border-color: #ffffff;
`;

export const SelectedIndicator = styled(Animated.View)`
  height: 2px;
  width: 100px;
  background: blue;
  position: absolute;
  bottom: -1px;
`;

export const SlideWrapper = styled.View`
  width: 200x;
  padding: 24px;
`;