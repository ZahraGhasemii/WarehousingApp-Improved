import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editProductApi } from "../../services/productService";

export default function useEditProduct() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProduct } = useMutation({
    mutationFn: editProductApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editProduct };
}
