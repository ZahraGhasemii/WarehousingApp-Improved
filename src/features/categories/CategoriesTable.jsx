import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import CategoryRow from "./CategoryRow";
import useCategories from "../../hooks/useCategories";

function CategoriesTable() {
  const { isLoading, fullTransformedCategories } = useCategories();

  if (isLoading) return <Loading />;

  if (
    fullTransformedCategories === typeof undefined ||
    !fullTransformedCategories?.length
  )
    return <Empty resourceName="دسته بندی ها" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان دسته بندی</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {fullTransformedCategories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CategoriesTable;
