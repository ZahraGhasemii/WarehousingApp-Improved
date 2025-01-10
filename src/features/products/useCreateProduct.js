import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductApi } from "../../services/productService";
import { toast } from "react-hot-toast";

export default function useCreateProduct() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProduct } = useMutation({
    mutationFn: createProductApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createProduct };
}
