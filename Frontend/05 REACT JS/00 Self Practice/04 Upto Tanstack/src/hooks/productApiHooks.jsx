import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import { getProductData } from "../api/productApi"
import { getDummyData } from "../api/dummyProduct"


export const useProductApi = () => {
    const {isPending, data, error} = useQuery({
    queryKey: ['product'],
    queryFn: getProductData,
    staleTime: 5000
  })
  return{
    isPending, data, error
  }
}


export const useDummyProduct = () => {
  let limit = 10
  let {data, isPending, error} = useInfiniteQuery({
    queryKey: ['dummyData'],
    queryFn: ({pageParam}) => getDummyData(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
        console.log('lastpage',lastPage);
        console.log('allpage',allPage);
    }
  })
  
  return{
      data, isPending, error
    }
}