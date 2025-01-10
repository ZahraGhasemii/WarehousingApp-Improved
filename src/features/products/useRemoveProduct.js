import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductApi } from "../../services/productService";
import { toast } from "react-hot-toast";

export default function useRemoveProduct() {
  const queryClient = useQueryClient();

  const { mutate: removeProduct, isPending: isDeleting } = useMutation({
    mutationFn: removeProductApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProduct, isDeleting };
}
