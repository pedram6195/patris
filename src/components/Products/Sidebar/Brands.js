import React from "react";

import FilterBox from "../../reusable/Sidebar/FilterBox";
import CheckboxList from "../../reusable/Sidebar/CheckboxList";

const lists = [
  {
    id: "brand-huawei",
    name: "هواوی"
  },
  {
    id: "brand-apple",
    name: "اپل"
  },
  {
    id: "brand-samsung",
    name: "سامسونگ"
  },
  {
    id: "brand-sony",
    name: "سونی"
  }
];

const Brands = () => {
  return (
    <FilterBox header="برند" id="brands">
      <CheckboxList lists={lists} />
    </FilterBox>
  );
};

export default Brands;
