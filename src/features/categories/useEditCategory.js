import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCategoryApi } from "../../services/categoyService";

export default function useEditProduct() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCategory } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editCategory };
}
