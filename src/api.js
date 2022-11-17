import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/photos`);
    return response.data;
}

export {getProducts};