import React, { useState } from "react";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const initialInput = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initialInput);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInputHandler = (inputField, value) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputField]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Field validation
    if (userInput.username === "" || userInput.age === "") {
      setHasError(true);
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      return;
    } else if (+userInput.age <= 0) {
      setHasError(true);
      setErrorMessage("Please enter a valid age (>0).");
      return;
    }

    props.onAddUser(userInput);
    setUserInput(initialInput);
  };

  const onDismissErrorHandler = () => {
    setHasError(false);
    setErrorMessage("");
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={styles["input"]}>
        <label>Username</label>
        <input
          value={userInput.username}
          onChange={(event) => {
            onChangeInputHandler("username", event.target.value);
          }}
        />
        <label>Age (Years)</label>
        <input
          type="number"
          value={userInput.age}
          onChange={(event) => {
            onChangeInputHandler("age", event.target.value);
          }}
        />
        <Button type="submit">Add User</Button>
      </form>
      {hasError && (
        <ErrorModal
          headerText="Invalid Input"
          contentText={errorMessage}
          dismissButtonText="Okay"
          onDismiss={onDismissErrorHandler}
        />
      )}
    </Card>
  );
};

export default AddUser;
