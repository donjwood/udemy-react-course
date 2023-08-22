import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={styles["backdrop"]}
      onClick={props.onDismiss}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles["modal"]}>
      <div className={styles["header"]}>
        <h2>{props.headerText}</h2>
      </div>
      <div className={styles["content"]}>{props.contentText}</div>
      <div className={styles["actions"]}>
        <Button onClick={props.onDismiss}>
          {props.dismissButtonText}
        </Button>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  const onClickDismissButtonHandler = () => {
    props.onDismiss();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={onClickDismissButtonHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          headerText={props.headerText}
          contentText={props.contentText}
          dismissButtonText={props.dismissButtonText}
          onDismiss={onClickDismissButtonHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
