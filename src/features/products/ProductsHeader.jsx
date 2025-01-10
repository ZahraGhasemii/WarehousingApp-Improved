import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProductForm from "./CreateProductForm";
import useCategories from "../../hooks/useCategories";
import FilterDropDown from "../../ui/FilterDropDown";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

function ProductsHeader() {
  const [open, setOpen] = useState(false);
  const { transformedCategories } = useCategories();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-black text-secondary-700 text-xl">لیست محصولات</h1>
        <div>
          <Modal
            title="اضافه کردن محصول جدید"
            open={open}
            onClose={() => setOpen(false)}
          >
            <CreateProductForm onClose={() => setOpen(false)} />
          </Modal>
          <button
            onClick={() => setOpen(true)}
            className="btn btn--primary flex items-center gap-x-2"
          >
            <HiOutlinePlus />
            <span>اضافه کردن محصول</span>
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div>
          <div className="flex gap-x-8 items-center">
            <FilterDropDown filterField="sort" options={sortOptions} />
            <FilterDropDown
              filterField="category"
              options={[
                {
                  value: "ALL",
                  label: "دسته بندی (همه)",
                },
                ...transformedCategories,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsHeader;
