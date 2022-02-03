import Multiselect from "multiselect-react-dropdown";

export default function MultiSelect({ options, value, handleChange }) {
  return (
    <Multiselect
      displayValue="category_name"
      isObject={true}
      options={options}
      selectedValues={value}
      onSelect={handleChange}
      onRemove={handleChange}
    />
  );
}

