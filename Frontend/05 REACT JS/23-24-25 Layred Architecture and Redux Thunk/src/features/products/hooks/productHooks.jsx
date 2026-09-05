import { useQuery } from "@tanstack/react-query";
import { getProductCategory, productApi } from "../api/productApi";

export const useAllProduct = () => {
  let { data, isPending, error } = useQuery({
    queryKey: "product",
    queryFn: productApi,
  });

//   console.log('productd data ', data);
  return {
    data,
    isPending,
    error,
  };
};


export const useAllCategory = () => {
    let {data, isPending, error} = useQuery({
      queryKey: 'productCategory',
      queryFn: getProductCategory,
    })
    return{ 
      data, isPending, error
    }
}
