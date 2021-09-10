import React from "react";
import { CardProps } from "../types";
import { bindActionCreators } from "redux";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { actionCreators, AppDispatch } from "../state/index";
import { StyleSheet, css } from "aphrodite";
import classnames from "classnames";

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    margin: "25px",
    minWidth: "100px",
    maxWidth: "300px",
    width: "80%",
    minHeight: "150px",
    height: "auto",
    color: "grey",
    border: "1px solid #8C7B78",
    position: "relative",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "#CEC5C5",
      border: "2px solid #8C7B78",
    },
  },
  id: {
    color: "#4E4A4A",
    fontStyle: "italic",
    position: "absolute",
    bottom: "0",
    left: "10px",
  },
  selected: {
    border: "2px solid #270AF2",
  },
  selectedId: {
    fontWeight: 600,
  },
});

export const CardFC: React.FC<CardProps> = ({ card }): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();
  const transactionsState = useAppSelector(
    (state) => state.customerTransactions
  );
  const { activeTransactionsID } = transactionsState;
  const isSelected = card.id === activeTransactionsID;

  const {
    selectCard,
    setActiveTransactionsId,
    setFilterTerm,
    setIsFiltered,
    getFilteredTransactions,
  } = bindActionCreators(actionCreators, dispatch);
  return (
    <div
      className={classnames(
        css(styles.card),
        isSelected && css(styles.selected)
      )}
      onClick={() => {
        if (isSelected) return;
        selectCard(card.id);
        setActiveTransactionsId(card.id);
        setIsFiltered(false);
        getFilteredTransactions();
        setFilterTerm("");
      }}
      key={card.id}
    >
      <p
        className={classnames(
          css(styles.id),
          isSelected && css(styles.selectedId)
        )}
      >
        {card.id}
      </p>
    </div>
  );
};
