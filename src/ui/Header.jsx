import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8`}
      >
        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
