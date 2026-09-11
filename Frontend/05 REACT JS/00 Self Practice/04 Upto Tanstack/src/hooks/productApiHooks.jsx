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
  
  // agar ham chate hai ki is data me data aaye to hame getNextPageParam ko call karna parega
  let {data, isPending, error, fetchNextPage} = useInfiniteQuery({
    queryKey: ['dummyData'],
    queryFn: ({pageParam}) => getDummyData(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      console.log('lastpage', lastPage);
      console.log('allPage', allPage);
      
      let loadedData = allPage.length * limit
      console.log('loadedData',loadedData);
      
      if(loadedData < lastPage.total) return loadedData
      return undefined
    }
    
  })
  let allProduct = data?.pages?.flatMap((e) => e.products) ?? []

  return{
      data, isPending, error,fetchNextPage, allProduct
    }
}