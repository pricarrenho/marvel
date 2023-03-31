import { Container } from "../Container";
import * as S from "./styles";

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.ContentText>
            Desenvolvido com 💜 por
            <span>
              <b> Priscilla Carrenho</b>
            </span>
          </S.ContentText>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Footer;
