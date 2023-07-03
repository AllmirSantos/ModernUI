import styled from "styled-components/native";
import theme from "../../theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";

export const Container = styled(Animatable.View)`
  background-color: ${({ props }) => theme.COLORS.PRIMARY_900};
  justify-content: center;
  align-items: center;
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(40)}px;

  border-radius: 10px;
  height: 280px;
`;
export const TextCenter = styled.Text`
  color: ${({ props }) => theme.COLORS.BACKGROUND};
  font-family: ${({ props }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(5)}px;
  margin-top: 10px;
`;
export const Fundation = styled.Text`
  color: ${({ props }) => theme.COLORS.BACKGROUND};
  font-family: ${({ props }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(3)}px;
  margin-top: 3px;
`;
export const Image = styled(Animatable.Image)`
  margin-top: ${RFPercentage(-15)}px;
  width: ${RFPercentage(30)}px;
  height: ${RFPercentage(30)}px;
`;
