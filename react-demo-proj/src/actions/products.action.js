import {appConstant} from "../constants/constant";
import axios from 'axios';

export const getProducts = () => {
    const getProductsPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/products`,
        // carry cookie, setCookie
        {withCredentials: true}
    );
    return {
        type: appConstant.GET_PRODUCTS,
        payload: getProductsPromise
    };
};

export const addProduct = newProduct => {
    const addProductPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/products`,
        newProduct,
        {withCredentials: true}
    );
    return {
        type: appConstant.ADD_PRODUCT,
        payload: addProductPromise
    };
};
