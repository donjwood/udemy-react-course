import React from "react";

import Card from "./Card";

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {

  const onClickDismissButtonHandler = () => {
    props.onDismiss();
  }

  return (
    <div>
      <div className={styles["backdrop"]} onClick={onClickDismissButtonHandler} />
      <Card className={styles["modal"]}>
        <div className={styles["header"]}>
          <h2>{props.headerText}</h2>
        </div>
        <div className={styles["content"]}>{props.contentText}</div>
        <div className={styles["actions"]}>
          <Button onClick={onClickDismissButtonHandler}>{props.dismissButtonText}</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
