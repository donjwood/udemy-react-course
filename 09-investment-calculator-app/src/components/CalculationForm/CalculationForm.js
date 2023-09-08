import React, { useState } from "react";

import styles from "./CalculationForm.module.css";

const initialInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const CalculationForm = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

  const onChangeInputHandler = (inputField, value) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputField]: +value,
      };
    });
  };

  const resetOnClickHandler = () => {
    setUserInput(initialInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalcFormSubmit(userInput);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(event) => {
              onChangeInputHandler("currentSavings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(event) => {
              onChangeInputHandler("yearlyContribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => {
              onChangeInputHandler("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => {
              onChangeInputHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetOnClickHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculationForm;
