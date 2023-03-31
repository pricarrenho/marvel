import { Container } from "../Container";
import { Input } from "../Input";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.WrapperContent>
          <S.LinkTitle to={"/"}>
            <h1>Marvel</h1>
          </S.LinkTitle>
          <Input />
        </S.WrapperContent>
      </Container>
    </S.Wrapper>
  );
};
