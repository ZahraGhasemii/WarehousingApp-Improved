import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCategoryApi } from "../../services/categoyService";
import { toast } from "react-hot-toast";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: addNewCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createCategory };
}
