import axios from "axios";

const API_URL: string = "https://api.unsplash.com";
const access_token = process.env.UNSPLASH_ACCESS_TOKEN;

export const RandomImageGenerator = async () => {
  const { data, status } = await axios.get(
    `${API_URL}/photos/random?client_id=${access_token}&count=4`
  );
  console.log(data);
  return data;
};
