import React from "react";

import ResultTableHeaderRow from "./ResultTableHeaderRow";
import ResultTableDataRow from "./ResultTableDataRow";

import styles from "./ResultTable.module.css";

const ResultTable = (props) => {
  return (
    <table className={styles["result"]}>
      <thead>
        <ResultTableHeaderRow />
      </thead>
      <tbody>
        {props.results.map((result) => (
          <ResultTableDataRow
            key={result.year}
            year={result.year}
            savingsEndOfYear={result.savingsEndOfYear}
            yearlyContribution={result.yearlyContribution}
            yearlyInterest={result.yearlyInterest}
            initialInvestment={props.initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
