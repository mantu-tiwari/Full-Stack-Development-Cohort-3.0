import { api } from "../../../config/api";

export const productApi  = async (search) => {
    try {
        // this is use for showing all product by default
        let url = search ? `/products/search?q=${search}` : '/products'
        let res = await api.get(url)
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


export const getProductByCategory = async (category) => {
    try {
        let res = await api.get(`/products/category/${category}`)
        return res.data
    } catch (error) {
        console.log('product category error is ', error);
    }
}