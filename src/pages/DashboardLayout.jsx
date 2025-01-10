import Stats from "./Stats";
import Loading from "../ui/Loading";
import DashboardHeader from "../ui/DashboardHeader";
import useProducts from "../features/products/useProducts";
import useCategories from "../hooks/useCategories";

function DashboardLayout() {
  const { isLoading, projects } = useProducts();
  const { fullTransformedCategories } = useCategories();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} categories={fullTransformedCategories} />
    </div>
  );
}
export default DashboardLayout;
