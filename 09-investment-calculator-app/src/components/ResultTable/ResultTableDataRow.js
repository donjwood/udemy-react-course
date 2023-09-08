import React from "react";

const ResultTableDataRow = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{props.year}</td>
      <td>{formatter.format(props.savingsEndOfYear)}</td>
      <td>{formatter.format(props.yearlyInterest)}</td>
      <td>
        {formatter.format(
          props.savingsEndOfYear -
            props.initialInvestment -
            props.yearlyContribution * props.year
        )}
      </td>
      <td>
        {formatter.format(
          props.initialInvestment + props.yearlyContribution * props.year
        )}
      </td>
    </tr>
  );
};

export default ResultTableDataRow;
