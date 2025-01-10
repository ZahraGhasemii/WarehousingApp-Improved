import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <DarkModeToggle />
      </li>
    </ul>
  );
}
export default HeaderMenu;
