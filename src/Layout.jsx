import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "./ui/AppLayout";
import { CustomNavLink } from "./ui/CustomNavlLink";
import Sidebar from "./ui/Sidebar";

function Layout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="products">
          <HiCollection />
          <span>محصولات</span>
        </CustomNavLink>

        <CustomNavLink to="categories">
          <HiCollection />
          <span>دسته بندی ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}
export default Layout;
