import axios from "axios";

export const fetchProducts = async () => {
    try {
        const data = await axios.get("http://localhost:5000/products");
        console.log("data: ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
