import { Animated, Text } from "react-native";
import styled from "styled-components/native";

type StatValueProps = {
    width: number;
};

export const Container = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const StatGraph = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StatLine = styled.View`
  flex: 1;
  overflow: hidden;
  height: 3px;
  background: #cfcccc;
  margin-left: 16px;
`;

export const StatValue = styled(Animated.View) <StatValueProps>`
  height: 10px;
  background: ${({ width }) =>
        width < 50 ? "#ec7f7f" : "#87e74f"};
  width: ${props => props.width}%;
`;

export const Section = styled.View`
  margin-bottom: 30px;
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