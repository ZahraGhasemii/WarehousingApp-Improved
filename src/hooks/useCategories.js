import { useQuery } from "@tanstack/react-query";
import { getListOfCategoriesWithQueryStringApi } from "../services/categoyService";
import { useLocation } from "react-router-dom";

export default function useCategories() {
  const { search } = useLocation();
  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQuery({
    queryKey: ["categories", queryObject],
    queryFn: () => getListOfCategoriesWithQueryStringApi(search),
  });

  // {_id, title, enTitle, ....}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  const fullTransformedCategories = rawCategories.map((item) => ({
    id: item._id,
    title: item.title,
    englishTitle: item.englishTitle,
    description: item.description,
    type: item.type,
  }));

  return {
    isLoading,
    categories,
    transformedCategories,
    fullTransformedCategories,
  };
}
