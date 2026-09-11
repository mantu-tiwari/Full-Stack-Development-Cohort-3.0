import { useQuery } from "@tanstack/react-query"
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
    const {data, isPending, error} = useQuery({
      queryKey: ['dummyProduct'],
      queryFn: getDummyData
    })
    return{
      data, isPending, error
    }
}