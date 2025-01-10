import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateCategoryForm from "./CreateCategoryForm";
//import FilterText from "../../ui/FilterText";

function CategoriesHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-black text-secondary-700 text-xl">
          لیست دسته بندی ها
        </h1>

        <div>
          <Modal
            title="اضافه کردن دسته بندی جدید"
            open={open}
            onClose={() => setOpen(false)}
          >
            <CreateCategoryForm onClose={() => setOpen(false)} />
          </Modal>
          <button
            onClick={() => setOpen(true)}
            className="btn btn--primary flex items-center gap-x-2"
          >
            <HiOutlinePlus />
            <span>اضافه کردن دسته بندی</span>
          </button>
        </div>
      </div>
      {/* <div className="flex flex-row gap-x-4">
        <h1 className="font-black text-secondary-700 text-xl">فیلتر ها:</h1>
        <div>
          <div className="flex gap-x-8 items-center">
            <FilterText label="category" filterField="text" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default CategoriesHeader;
