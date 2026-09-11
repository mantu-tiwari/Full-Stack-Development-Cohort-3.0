import axios from 'axios'

export const getDummyData = async () => {
    try {
        let res = await axios.get('https://dummyjson.com/products?limit=10')
        return res.data
    } catch (error) {
        console.log('error in dummy data', error);
    }
}