import React, { useState } from "react";

import Header from "./components/UI/Header";
import CalculationForm from "./components/CalculationForm/CalculationForm";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [calcResults, setCalcResults] = useState([]);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    return yearlyData;
  };

  const onCalcFormSubmitHandler = (userInput) => {
    setUserInput(userInput);
    setCalcResults(calculateHandler(userInput));
  };

  return (
    <div>
      <Header />
      <CalculationForm onCalcFormSubmit={onCalcFormSubmitHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {calcResults.length > 0 ? (
        <ResultTable
          results={calcResults}
          initialInvestment={userInput.currentSavings}
        />
      ) : (
        <p style={{ textAlign: "center" }}>
          Please submit values for calculation.
        </p>
      )}
    </div>
  );
}

export default App;
