import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProduct from "./useRemoveProduct";
import CreateProductForm from "./CreateProductForm";
// import { Link } from "react-router-dom";

function ProductRow({ product, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProduct } = useRemoveProduct();

  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{truncateText(product.title, 30)}</td>

      <td> {product.quantity}</td>

      <td>{toPersianNumbersWithComma(product.price)}</td>

      <td> {product.category.title}</td>

      <td>{toLocalDateShort(product.createdAt)}</td>

      <td>{toLocalDateShort(product.updatedAt)}</td>

      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${product.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProductForm
                productToEdit={product}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${product.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={product.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProduct(product._id, {
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
export default ProductRow;
