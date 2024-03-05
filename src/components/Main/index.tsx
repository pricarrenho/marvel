import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMarvelCharacters } from "../../services/api/characters";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { PaginationType } from "./types";
import * as S from "./styles";
import { Container } from "../Container";
import { useGlobalContext } from "../../context/GlobalContext";
import { Loading } from "../Loading";

export const Main = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<string[]>([]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPageOffset, setTotalCurrentPageOffset] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const { debouncedFilter } = useGlobalContext();

  const handleClick = (value: PaginationType) => {
    setSearchParams({ page: value });
  };

  useEffect(() => {
    setTotalCurrentPageOffset(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  useEffect(() => {
    setTotalCurrentPageOffset(1);
  }, [debouncedFilter]);

  useEffect(() => {
    setLoading(true);

    getMarvelCharacters(currentPageOffset, debouncedFilter).then((value) => {
      setCharacters(value.data.data.results);
      setTotalCharacters(value.data.data.total);
      setLoading(false);
    });
  }, [currentPageOffset, debouncedFilter]);

  const totalPages = Math.ceil(totalCharacters / 10);

  return (
    <Container>
      <S.Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.Titles>
              <h2>Personagens</h2>
              <h2>Series</h2>
              <h2>Eventos</h2>
            </S.Titles>

            {characters?.map((item: any) => (
              <S.LinkWrapper to={`/hero/${item.id}`}>
                <S.WrapperCard>
                  <S.WrapperCardImage>
                    <S.Image
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={item.name}
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
              <Button
                styleType="primary"
                onClick={() => handleClick("1")}
                icon="doubleArrowLeft"
                disabled={currentPageOffset === 1}
              />

              <Button
                styleType="primary"
                onClick={() => handleClick(String(currentPageOffset - 1))}
                icon="arrowLeft"
                disabled={currentPageOffset === 1}
              />

              {Array.from(Array(totalPages).keys())
                .map((_, index) => {
                  const buttonOffset = index + 1;

                  return (
                    <Button
                      key={index}
                      styleType={
                        buttonOffset === currentPageOffset
                          ? "secondary"
                          : "primary"
                      }
                      onClick={() => handleClick(String(buttonOffset))}
                    >
                      {buttonOffset}
                    </Button>
                  );
                })
                .slice(
                  currentPageOffset <= 1 ? 0 : currentPageOffset - 2,
                  currentPageOffset <= 1 ? 3 : currentPageOffset + 1
                )}

              <Button
                styleType="primary"
                onClick={() => handleClick(String(currentPageOffset + 1))}
                icon="arrowRight"
                disabled={currentPageOffset === totalPages}
              />

              <Button
                styleType="primary"
                onClick={() => handleClick(String(totalPages))}
                icon="doubleArrowRight"
                disabled={currentPageOffset === totalPages}
              />
            </S.Pagination>
          </>
        )}
      </S.Wrapper>
    </Container>
  );
};
