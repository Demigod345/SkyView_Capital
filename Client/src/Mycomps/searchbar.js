import React, { useState } from "react";
import Select from "react-select";

const options = [
  { label: "Apple", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Orange", value: 3 },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#121212", // Dark background color
    borderColor: state.isFocused ? "#00FF00" : "#0000FF", // Green border when focused, blue border otherwise
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#FF0000" : "#0000FF", // Red border when hovered and focused, blue border otherwise
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white", // White text color for the selected value
  }),
  valueContainer: (base) => ({
    ...base,
    color: "hotpink", // Hotpink placeholder color
    width: "100%",
  }),
};

export default function Seacrh() {
  const [selectedOption, setselectedOption] = useState();

  const handleChange = (selectedOption, actionMeta) => {
    setselectedOption(selectedOption);
    console.log(actionMeta);
  };

  return (
    <div className="App">
      <Select
        label="select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        defaultValue={{ label: "Default Option", value: "default-value" }}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral30: "white",
            primary25: "#00FF00", // Green background color when option is focused
            primary: "#0000FF", // Blue background color when option is selected
            primary50: "#00FF00", // Green background color for active (enabled) option
            neutral90: "hotpink",
          },
        })}
      />
    </div>
  );
}