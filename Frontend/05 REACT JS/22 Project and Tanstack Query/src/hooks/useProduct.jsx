import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api/productApi";

export const useProduct = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: getProductData,
    staleTime: 5000,
  });
  return{
    isPending, error, data
  }
};
