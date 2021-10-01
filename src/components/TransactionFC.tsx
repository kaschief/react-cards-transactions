import React from "react";
import { StyleSheet, css } from "aphrodite";
import { TransactionProps } from "../types";

const styles = StyleSheet.create({
  transaction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
    margin: "0 0 10px 0",
    borderRadius: "5px",
    backgroundColor: "#D7D7DB",
    ":hover": {
      transform: "scale(1.005)",
    },
  },
  details: {
    margin: "0 20px 0 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  meta: {
    fontWeight: 600,
  },
});

export const TransactionFC: React.FC<TransactionProps> = ({ transaction }) => {
  const { id, amount, description } = transaction;

  return (
    <div className={css(styles.transaction)} key={id}>
      <div className={css(styles.details)}>
        <p>{description}</p>
        <p className={css(styles.meta)}>{amount}€</p>
      </div>
    </div>
  );
};
