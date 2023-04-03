import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMarvelHero } from "../../services/api/hero";
import { Container } from "../Container";
import { ContentToShowType } from "./types";
import { Button } from "../Button";
import Footer from "../Footer";
import * as S from "./styles";

export const ContentHero = () => {
  const params = useParams();
  const [hero, setHero] = useState<string[]>([]);
  const [contentToShow, setContentToShow] =
    useState<ContentToShowType>("series");

  const title = {
    series: "Series",
    events: "Eventos",
    stories: "Histórias",
  };

  useEffect(() => {
    getMarvelHero(params.id).then((value) => {
      setHero(value.data.data.results);
    });
  }, [params.id]);

  const handleClick = (value: ContentToShowType) => {
    setContentToShow(value);
  };

  return (
    <>
      <Container>
        <S.Wrapper>
          {hero?.map((item: any) => (
            <div key={item.id}>
              <S.WrapperContent>
                <S.Image
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.id}
                />

                <div>
                  <S.Title>{item.name}</S.Title>

                  <S.WrapperButton>
                    <Button
                      styleType={"tertiary"}
                      onClick={() => handleClick("series")}
                    >
                      Series
                    </Button>

                    <Button
                      styleType={"tertiary"}
                      onClick={() => handleClick("events")}
                    >
                      Eventos
                    </Button>

                    <Button
                      styleType={"tertiary"}
                      onClick={() => handleClick("stories")}
                    >
                      Histórias
                    </Button>
                  </S.WrapperButton>
                </div>
              </S.WrapperContent>

              <S.WrapperContentText>
                <S.Subtitle>{title[contentToShow]}</S.Subtitle>

                <ul>
                  {item[contentToShow].items.map((item: any) => (
                    <S.Description key={item.name}>{item.name}</S.Description>
                  ))}
                </ul>
              </S.WrapperContentText>
            </div>
          ))}
        </S.Wrapper>
      </Container>

      <Footer />
    </>
  );
};
