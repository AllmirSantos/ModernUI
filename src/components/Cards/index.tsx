import React from "react";
import * as S from "./styles";

import Flamengo from "../../assets/image/3.png";

export function Cards() {
  return (
    <S.Container animation="slideInRight" duration={1000}>
      <S.Image source={Flamengo} animation="pulse" delay={1000} />
      <S.TextCenter>Flamengo</S.TextCenter>
      <S.Fundation>1878</S.Fundation>
    </S.Container>
  );
}
