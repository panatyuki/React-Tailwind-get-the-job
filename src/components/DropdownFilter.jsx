// DropdownFilter component

import { useState } from "react";
import PropTypes from "prop-types";

function DropdownFilter({ categories, types, onFilter, onReset }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const resetSelection = () => {
    setSelectedCategory("");
    setSelectedType("");
    onReset();
  };

  return (
    <div className="bg-gray-400 flex flex-row justify-center w-auto h-auto p-4">
      {/* Dropdown Category & Type & Submit button */}
      <div className="flex flex-row items-center space-x-5">
        {/* Category Dropdown */}

        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-52"
              onClick={() => setSelectedCategory("")}
            >
              {selectedCategory || "Select a category"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {categories.map((category, index) => (
                <li key={index}>
                  <a onClick={() => setSelectedCategory(category)}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Type Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-52"
              onClick={() => setSelectedType("")}
            >
              {selectedType || "Select a type"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {types.map((type, index) => (
                <li key={index}>
                  <a onClick={() => setSelectedType(type)}>{type}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Submit & Reset button */}
        <div className="space-x-2">
          <button
            className="btn btn-active btn-accent text-white hover:bg-green-600 hover:border-green-600"
            onClick={() => onFilter(selectedCategory, selectedType)}
          >
            Submit
          </button>
          <button
            className="btn btn-active btn-secondary hover:bg-red-600 hover:border-red-600"
            onClick={resetSelection}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

DropdownFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default DropdownFilter;

