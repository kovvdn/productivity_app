import React from "react";
import InputForm from "./inputForm";

const productivity = props => (
  <InputForm
    handleInputData={data => {
      console.log(data);
    }}
    products={props.products}
  />
);

export default productivity;
