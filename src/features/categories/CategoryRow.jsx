import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveCategory from "./useRemoveCategory";
import CreateCategoryForm from "./CreateCategoryForm";

function CategoryRow({ category, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeCategory } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.englishTitle}</td>
      <td>{category.description}</td>
      <td>{category.type}</td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${category.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateCategoryForm
                categoryToEdit={category}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${category.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={category.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeCategory(category.id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoryRow;
