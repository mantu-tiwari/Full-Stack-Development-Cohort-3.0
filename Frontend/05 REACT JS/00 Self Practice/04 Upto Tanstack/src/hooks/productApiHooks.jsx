import { useQuery } from "@tanstack/react-query"
import { getProductData } from "../api/productApi"

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