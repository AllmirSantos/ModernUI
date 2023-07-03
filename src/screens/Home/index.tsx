import React from "react";
import * as S from "./styles";

import coverImg from "../../assets/image/headerLogo.png";
import { Input } from "../../components/Input";
import { Cards } from "../../components/Cards";

export function Home() {
  return (
    <S.Container>
      <S.Header source={coverImg}>
        <Input
          placeholder="Pesquisar...
        "
        />
      </S.Header>
      <S.Content>
        <Cards />
      </S.Content>
    </S.Container>
  );
}
