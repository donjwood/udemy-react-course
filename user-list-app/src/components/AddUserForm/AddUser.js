import React, { useState } from "react";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const initialInput = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

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
    props.onAddUser(userInput);
    setUserInput(initialInput);
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
    </Card>
  );
};

export default AddUser;
