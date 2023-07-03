import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TextInput`
  margin: 0 20px 20px;
  height: 54px;
  background-color: ${({ props }) => theme.COLORS.BACKGROUND};
  color: ${({ props }) => theme.COLORS.TEXT};
  padding: 0 16px;
  border-radius: 5px;
`;
