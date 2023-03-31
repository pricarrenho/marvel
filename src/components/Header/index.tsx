import { Container } from "../Container";
import { Input } from "../Input";

import * as S from "./styles";
import { HeaderProps } from "./types";

export const Header = ({ active }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.WrapperContent>
          <S.LinkTitle to={"/"}>
            <h1>Marvel</h1>
          </S.LinkTitle>
          {active && <Input />}
        </S.WrapperContent>
      </Container>
    </S.Wrapper>
  );
};
