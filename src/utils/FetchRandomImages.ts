import axios from "axios";

const API_URL: string = "https://api.unsplash.com";
const access_token = process.env.UNSPLASH_ACCESS_TOKEN;

export const RandomImageGenerator = async () => {
  const { data } = await axios.get(
    `${API_URL}/photos/random?client_id=${access_token}&count=4`
  );
  console.log(data);
  return data;
};

export const FetchImage = async (id: string | undefined) => {
  const { data } = await axios.get(
    `${API_URL}/photos/${id}?client_id=${access_token}`
  );
  return data;
};
