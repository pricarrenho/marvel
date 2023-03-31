import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMarvelCharacters } from "../../services/api/characters";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { PaginationType } from "./types";
import * as S from "./styles";
import { Container } from "../Container";

export const Main = () => {
  const [characters, setCharacters] = useState<any>(null);
  const [totalCharacters, setTotalCharacters] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (value: PaginationType) => {
    setSearchParams({ page: value });
  };

  const currentPageOffset = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    getMarvelCharacters(currentPageOffset).then((value) => {
      setCharacters(value.data.data.results);
      setTotalCharacters(value.data.data.total);
    });
  }, [currentPageOffset]);

  const totalPages = Math.ceil(totalCharacters / 10);

  return (
    <Container>
      <S.WrapperTable>
        <S.WrapperHead>
          <tr>
            <th>Personagens</th>
            <th>Series</th>
            <th>Eventos</th>
          </tr>
        </S.WrapperHead>
        {characters?.map((item: any) => (
          <S.WrapperBody key={item.id}>
            <tr>
              <td>
                <S.Image
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />

                <Link to={`/hero/${item.id}`}>
                  <span>{item.name}</span>
                </Link>
              </td>

              <td>
                {item.series.items
                  .map((item: any) => <span key={item.name}>{item.name}</span>)
                  .slice(0, 2)}
              </td>

              <td>
                {item.events.items
                  .map((item: any) => <span key={item.name}>{item.name}</span>)
                  .slice(0, 2)}
              </td>
            </tr>
          </S.WrapperBody>
        ))}
      </S.WrapperTable>
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
                styleType={
                  buttonOffset === currentPageOffset ? "secondary" : "primary"
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
    </Container>
  );
};
