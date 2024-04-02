import axios from "axios";

async function fetchApi(url, data) {
  try {
    const result = await axios.get(url, data);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export { fetchApi };
