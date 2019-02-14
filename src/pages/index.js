import React from "react";

import Layout from "../components/layout";
import InputForm from "../components/inputForm";
import ResultTable from "../components/resultTable";

import withHandledData from "../components/withHandledData";

const IndexPage = props => {
  console.log(props);
  return (
    <Layout clearOutputTable={props.clearOutput}>
      {({ products }) => (
        <>
          <InputForm products={products} handleInputData={props.handleData} />
          <br />
          {props.output.length > 0 && (
            <>
              <ResultTable
                deleteRow={props.deleteOutputItem}
                output={props.output}
              />
              <br />
              <p className="lead text-right">
                Общая выработка: {props.productivity} %
              </p>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default withHandledData(IndexPage);
