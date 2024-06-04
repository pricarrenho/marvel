import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMarvelCharacters } from "../../services/api/characters";
import { Container } from "../Container";
import { useGlobalContext } from "../../context/GlobalContext";
import { Loading } from "../Loading";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import * as S from "./styles";

export const Main = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const [currentPageOffset, setTotalCurrentPageOffset] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const { debouncedFilter, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    setTotalCurrentPageOffset(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  useEffect(() => {
    setTotalCurrentPageOffset(1);
  }, [debouncedFilter]);

  useEffect(() => {
    setIsLoading(true);

    getMarvelCharacters(currentPageOffset, debouncedFilter).then((value) => {
      setCharacters(value.data.data.results);
      setTotalCharacters(value.data.data.total);
      setIsLoading(false);
    });
  }, [currentPageOffset, debouncedFilter, setIsLoading]);

  const totalPages = Math.ceil(totalCharacters / 10);

  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <S.Wrapper>
        {isLoading ? (
          <Loading />
        ) : characters.length === 0 ? (
          <S.CharacterNotFound>
            Não foi encontrado nenhum personagem, tente novamente.
          </S.CharacterNotFound>
        ) : (
          <>
            <S.Titles>
              <h2>Personagens</h2>
              <h2>Series</h2>
              <h2>Eventos</h2>
            </S.Titles>

            {characters?.map((item: any) => (
              <S.LinkWrapper to={`/hero/${item.id}`} key={item.id}>
                <S.WrapperCard>
                  <S.WrapperCardImage>
                    <S.Image
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Imagem do herói ${item.name}`}
                    />
                    <span>{item.name}</span>
                  </S.WrapperCardImage>

                  <S.WrapperCardSeries>
                    {item.series.items
                      .map((item: any) => <p key={item.name}>{item.name}</p>)
                      .slice(0, 2)}
                  </S.WrapperCardSeries>

                  <S.WrapperCardEvents>
                    <p>
                      {item.events.items
                        .map((item: any) => (
                          <span key={item.name}>{item.name}</span>
                        ))
                        .slice(0, 2)}
                    </p>
                  </S.WrapperCardEvents>
                </S.WrapperCard>
              </S.LinkWrapper>
            ))}

            <S.Pagination>
              {!(currentPageOffset === 1) && (
                <>
                  <S.LinkPagination
                    onClick={scrollOnTop}
                    to="/?page=1"
                    aria-label="Botão para voltar para a primeira página"
                  >
                    <MdKeyboardDoubleArrowLeft />
                  </S.LinkPagination>

                  <S.LinkPagination
                    onClick={scrollOnTop}
                    to={`/?page=${String(currentPageOffset - 1)}`}
                    aria-label="Botão para voltar uma página"
                  >
                    <MdKeyboardArrowLeft />
                  </S.LinkPagination>
                </>
              )}

              {Array.from(Array(totalPages).keys())
                .map((_, index) => {
                  const buttonOffset = index + 1;

                  return (
                    <S.LinkPagination
                      onClick={scrollOnTop}
                      key={index}
                      to={`/?page=${String(buttonOffset)}`}
                      aria-label={`Botão para ir até a página ${buttonOffset}`}
                      $currentButton={buttonOffset === currentPageOffset}
                    >
                      {buttonOffset}
                    </S.LinkPagination>
                  );
                })
                .slice(
                  currentPageOffset <= 1 ? 0 : currentPageOffset - 2,
                  currentPageOffset <= 1 ? 3 : currentPageOffset + 1
                )}

              {!(currentPageOffset === totalPages) && (
                <>
                  <S.LinkPagination
                    onClick={scrollOnTop}
                    to={`/?page=${String(currentPageOffset + 1)}`}
                    aria-label="Botão para ir uma página pra frente"
                  >
                    <MdKeyboardArrowRight />
                  </S.LinkPagination>

                  <S.LinkPagination
                    onClick={scrollOnTop}
                    to={`/?page=${String(totalPages)}`}
                    aria-label="Botão para ir até a última página"
                  >
                    <MdKeyboardDoubleArrowRight />
                  </S.LinkPagination>
                </>
              )}
            </S.Pagination>
          </>
        )}
      </S.Wrapper>
    </Container>
  );
};
