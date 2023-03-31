import md5 from "md5";
import axios from "axios";

export const getMarvelCharacters = async (pagination: any) => {
  const url = "https://gateway.marvel.com/v1/public/characters";
  const timestamp = new Date().getTime();

  const privateKey = "577b6115809153e62ecb5c567f7afc99da3f62a5";
  const publicKey = "f4f576f97b7e03246e3e7b4df8c3b49d";

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
    },
  });
};
