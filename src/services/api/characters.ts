import md5 from "md5";
import axios from "axios";

export const getMarvelCharacters = async (
  pagination?: number,
  name?: string
) => {
  const url = "https://gateway.marvel.com/v1/public/characters";
  const timestamp = new Date().getTime();

  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const offset = Number(pagination) - 1;
  const limit = 10;
  const page = offset * limit;

  return axios.get(url, {
    params: {
      apikey: publicKey,
      ts: timestamp,
      hash,
      limit,
      offset: page,
      nameStartsWith: name || undefined,
    },
  });
};
