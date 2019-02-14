import React from "react";

// label
// norm
// produced
// in percentage

//TODO: delete row on click event
// TODO: sum total percentage
// TODO: add downtime column if it was
const ResultTable = ({ output, deleteRow }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Продукция</th>
        <th scope="col">Норма</th>
        <th scope="col">Выполнено комплектов</th>
        <th scope="col">Простой</th>
        <th scope="col">%</th>
      </tr>
    </thead>
    <tbody>
      {output.map((data, i) => (
        <tr key={data.id} onDoubleClick={() => deleteRow(data.id)}>
          <th scope="row">{i + 1}</th>
          <td>{data.label}</td>
          <td>{data.requiredRate}</td>
          <td>{data.manufactured}</td>
          <td>{data.downtime}</td>
          <td>{data.productivity}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ResultTable;
