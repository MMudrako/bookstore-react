import axios from "axios";

export async function bookLoader({ params }) {
    const response = await axios.get('/api/books/' + params.id);
    const bookData = response.data;
    return bookData;
}