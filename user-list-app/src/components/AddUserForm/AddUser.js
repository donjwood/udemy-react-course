import React, { useState, useRef } from "react";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // Field validation
    if (enteredName.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        header: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (+enteredAge <= 0) {
      setError({
        header: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser({ username: enteredName, age: enteredAge });

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };

  const onDismissErrorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <Card className={styles["input"]}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <ErrorModal
          headerText={error.header}
          contentText={error.message}
          dismissButtonText="Okay"
          onDismiss={onDismissErrorHandler}
        />
      )}
    </React.Fragment>
  );
};

export default AddUser;
