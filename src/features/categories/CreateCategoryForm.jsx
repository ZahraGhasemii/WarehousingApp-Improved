import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import useCreateCategory from "./useCreateCategory";
import Loading from "../../ui/Loading";
import useEditCategory from "./useEditCategory";

function CreateCategoryForm({ onClose, categoryToEdit = {} }) {
  const { id: editId } = categoryToEdit;

  const isEditSession = Boolean(editId);

  const { title, englishTitle, description, type } = categoryToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
      type,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { isCreating, createCategory } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();

  const onSubmit = (data) => {
    const newCategory = {
      ...data,
    };

    if (isEditSession) {
      editCategory(
        { id: editId, newCategory },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createCategory(newCategory, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 3,
            message: "حداقل 3 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />

      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
        }}
        errors={errors}
      />

      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
        }}
        errors={errors}
      />

      <TextField
        label="نوع"
        name="type"
        register={register}
        required
        validationSchema={{
          required: "نوع ضروری است",
        }}
        errors={errors}
      />

      <div className="!mt-8">
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}
export default CreateCategoryForm;
