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
  //const [hasError, setHasError] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState();
  

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
    if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0) {
      setError({
        header: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    } else if (+userInput.age <= 0) {
      setError({
        header: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }

    props.onAddUser(userInput);
    setUserInput(initialInput);
  };

  const onDismissErrorHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles["input"]}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={userInput.username}
          onChange={(event) => {
            onChangeInputHandler("username", event.target.value);
          }}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userInput.age}
          onChange={(event) => {
            onChangeInputHandler("age", event.target.value);
          }}
        />
        <Button type="submit">Add User</Button>
      </form>
      {error && (
        <ErrorModal
          headerText={error.header}
          contentText={error.message}
          dismissButtonText="Okay"
          onDismiss={onDismissErrorHandler}
        />
      )}
    </Card>
  );
};

export default AddUser;
