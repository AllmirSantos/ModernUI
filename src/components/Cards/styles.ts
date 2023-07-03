import styled from "styled-components/native";
import theme from "../../theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";

export const Container = styled(Animatable.View)`
  background-color: ${({ props }) => theme.COLORS.PRIMARY_900};
  justify-content: center;
  align-items: center;
  width: 180px;
  border-radius: 10px;
  height: 180px;
`;
export const TextCenter = styled.Text`
  color: ${({ props }) => theme.COLORS.BACKGROUND};
  font-family: ${({ props }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;
  margin-top: 15px;
`;
export const Fundation = styled.Text`
  color: ${({ props }) => theme.COLORS.BACKGROUND};
  font-family: ${({ props }) => theme.FONTS.REGULAR};
  font-size: 14px;
  margin-top: 10px;
`;
export const Image = styled(Animatable.Image)`
  margin-top: -80px;
  width: 150px;
  height: 150px;
`;
