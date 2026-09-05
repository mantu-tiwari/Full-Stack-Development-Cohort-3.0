import { api } from "../../../config/api";

export const productApi  = async () => {
    try {
        let res = await api.get('/products')
        // console.log(res);
        return res.data.products
    } catch (error) {
        console.log('error in all product api ', error);
    }
}


export const getProductCategory = async () => {
    try {
        let res = await api.get('/products/categories')
        return res.data
    } catch (error) {
        console.log('product category error is ', error);
    }
}