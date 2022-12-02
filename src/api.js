import axios from "axios";

const getImages = async () => {
    const response = await axios.get(`https://pixabay.com/api/?key=31774186-4ccef4cb19747699d8a9aaff8&q=yellow+flowers&image_type=photo&pretty=true`);
    return response.data;
}

export {getImages};