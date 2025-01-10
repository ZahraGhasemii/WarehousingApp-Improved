import useProducts from "./useProducts";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProductRow from "./ProductRow";

function ProductTable() {
  const { isLoading, productions } = useProducts();

  if (isLoading) return <Loading />;

  if (productions === typeof undefined || !productions?.length)
    return <Empty resourceName="محصولات" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>تعداد</th>
        <th>قیمت</th>
        <th>دسته بندی</th>
        <th>تاریخ ثبت</th>
        <th>تاریخ ویرایش</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {productions.map((product, index) => (
          <ProductRow key={product._id} product={product} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProductTable;
