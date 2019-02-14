import React from "react";
import { Helmet } from "react-helmet";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css"
          integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA"
          crossOrigin="anonymous"
        />
      </Helmet>
      {element}
    </>
  );
};
