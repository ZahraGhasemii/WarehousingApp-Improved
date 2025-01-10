import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import useCategories from "../../hooks/useCategories";
import useCreateProduct from "./useCreateProduct";
import Loading from "../../ui/Loading";
import useEditProduct from "./useEditProduct";

function CreateProductForm({ onClose, productToEdit = {} }) {
  const { _id: editId } = productToEdit;
  const isEditSession = Boolean(editId);

  const { title, quantity, price, category } = productToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      quantity,
      price,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { categories } = useCategories();
  const { isCreating, createProduct } = useCreateProduct();
  const { editProduct, isEditing } = useEditProduct();

  const onSubmit = (data) => {
    const newProduct = {
      ...data,
    };

    if (isEditSession) {
      editProduct(
        { id: editId, newProduct },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProduct(newProduct, {
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
        label="تعداد"
        name="quantity"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "تعداد ضروری است",
        }}
        errors={errors}
      />

      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "قیمت ضروری است",
        }}
        errors={errors}
      />

      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
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
export default CreateProductForm;
