import { useSearchParams } from "react-router-dom";

function FilterText({ label, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <input
        value={filterValue}
        onChange={handleChange}
        type="text"
        name={filterValue}
        id={filterValue}
        placeholder={label}
        className="textField__input"
      />
    </div>
  );
}
export default FilterText;
