import React, { useEffect } from "react";
import "./styles.css";

import { actionCreators, AppDispatch } from "./state/index";
import { bindActionCreators } from "redux";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { cards } from "./ApiClient/data/cards";
import { transactions } from "./ApiClient/data/transactions";

export default function App() {
  const cardsFromState = useAppSelector((state) => state.cards);
  const transactionsFromState = useAppSelector((state) => state.transactions);

  const dispatch: AppDispatch = useAppDispatch();
  const {
    setCards,
    selectCard,
    setActiveTransactionsId,
    setTransactions,
    setFilterTerm,
    setIsFiltered,
    getFilteredTransactions,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setCards(cards);
    setTransactions(transactions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const filterTerm = e.currentTarget.value;
    const filterStatus = filterTerm.length !== 0;
    setFilterTerm(filterTerm);
    setIsFiltered(filterStatus);
    getFilteredTransactions();
  };

  return (
    <div className="App">
      <h1>Cards & Transactions</h1>

      {cardsFromState.cards.map(
        (
          card
        ): React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        > => {
          return (
            <div
              style={{ cursor: "pointer", margin: "20px" }}
              onClick={(event) => {
                if (card.id === transactionsFromState.activeTransactionsID)
                  return;
                selectCard(card.id);
                setActiveTransactionsId(card.id);
                setIsFiltered(false);
                getFilteredTransactions();
                setFilterTerm("");
              }}
              key={card.id}
            >
              {card.id}
            </div>
          );
        }
      )}

      {transactionsFromState.activeTransactionsID && (
        <input
          type="text"
          name="input"
          value={transactionsFromState.filterTerm}
          onChange={handleChange}
        />
      )}

      {transactionsFromState.filteredTransactions.map(
        (transaction): JSX.Element => {
          let { id, amount, description } = transaction;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                margin: "0 auto",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <p style={{ alignSelf: "center", margin: "0 auto" }}>
                Transaction: {id}
              </p>
              <p style={{ alignSelf: "center", margin: "0 auto" }}>
                Amount: {amount}
              </p>
              <p style={{ alignSelf: "center", margin: "0 auto" }}>
                Description: {description}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
}
