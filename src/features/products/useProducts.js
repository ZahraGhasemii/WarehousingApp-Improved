import { useQuery } from "@tanstack/react-query";
import { getProductsWithQueryStringApi } from "../../services/productService";
import { useLocation } from "react-router-dom";

export default function useProducts() {
  const { search } = useLocation();

  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQuery({
    queryKey: ["products", queryObject],
    queryFn: () => getProductsWithQueryStringApi(search),
  });

  const { productions } = data || {};

  return { isLoading, productions };
}
