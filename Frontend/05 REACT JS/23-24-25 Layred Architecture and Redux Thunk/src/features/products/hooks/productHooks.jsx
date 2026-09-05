import { useQuery } from "@tanstack/react-query";
import { getProductCategory, productApi } from "../api/productApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null)

  // debounce login
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search)
    }, 1000);
      return ()=> clearTimeout(timeout)
  },[search])

  let { data, isPending, error } = useQuery({
    queryKey: ['product', debounceSearch],
    queryFn: () => productApi(debounceSearch),
  });

  //   console.log('productd data ', data);
  return {
    data,
    isPending,
    error,
    setSearch, search
  };
};

export const useAllCategory = () => {
  let { data, isPending, error } = useQuery({
    queryKey: "productCategory",
    queryFn: getProductCategory,
  });
  return {
    data,
    isPending,
    error,
  };
};
