import { Container } from "../Container";
import { Input } from "../Input";
import { HeaderProps } from "./types";
import marvel from "../../assets/img/marvel.png";
import * as S from "./styles";

export const Header = ({ active }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.WrapperContent>
          <S.LinkTitle to={"/"}>
            <S.Image src={marvel} alt="Logo da Marvel" />
          </S.LinkTitle>
          {active && <Input />}
        </S.WrapperContent>
      </Container>
    </S.Wrapper>
  );
};
