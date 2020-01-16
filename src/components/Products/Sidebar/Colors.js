import React from "react";

import FilterBox from "../../reusable/Sidebar/FilterBox";
import CheckboxList from "../../reusable/Sidebar/CheckboxList";

const lists = [
  {
    id: "color-black",
    name: "مشکی"
  },
  {
    id: "color-white",
    name: "سفید"
  },
  {
    id: "color-silver",
    name: "نقره ای"
  },
  {
    id: "color-grey",
    name: "خاکستری"
  }
];

const Colors = () => {
  return (
    <FilterBox header="رنگ" id="colors">
      <CheckboxList lists={lists} />
    </FilterBox>
  );
};

export default Colors;
