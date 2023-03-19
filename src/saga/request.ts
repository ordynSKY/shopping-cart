import axios from "axios";

export const fetchProducts = async () => {
    console.log("req; ", process.env);
    try {
        const data = await axios.get(
            `${process.env.REACT_APP_BASE_URL}products` || ""
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
