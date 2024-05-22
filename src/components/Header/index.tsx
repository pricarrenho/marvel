import { Container } from "../Container";
import { Input } from "../Input";
import { HeaderProps } from "./types";
import marvel from "../../assets/img/marvel.png";
import * as S from "./styles";
import { useGlobalContext } from "../../context/GlobalContext";

export const Header = ({ active }: HeaderProps) => {
  const { filterValue, setFilterValue } = useGlobalContext();

  return (
    <S.Wrapper>
      <Container>
        <S.WrapperContent>
          <S.LinkTitle to={"/"}>
            <S.Image src={marvel} alt="Logo da Marvel" />
          </S.LinkTitle>
          {active && (
            <Input
              name="searchInput"
              value={filterValue}
              onChange={setFilterValue}
              onClear={setFilterValue}
            />
          )}
        </S.WrapperContent>
      </Container>
    </S.Wrapper>
  );
};
