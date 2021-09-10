import React, { useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

import { actionCreators, AppDispatch } from "./state/index";
import { bindActionCreators } from "redux";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { cards } from "./ApiClient/data/cards";
import { transactions } from "./ApiClient/data/transactions";
import { CardFC } from "./components/CardFC";
import { TransactionFC } from "./components/TransactionFC";

const styles = StyleSheet.create({
  wrapper: {
    display: "grid",
    maxWidth: "80vw",
    gridTemplateAreas: `
    "title"
    "cards"
    "input"
    "transactions"
  `,
    gridTemplateColumns: "1fr",
    gridTemplateRows: `
    minmax(15px, auto)
    auto
    auto
    1fr
    `,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "30px",
    margin: "0 auto",
  },
  title: {
    gridArea: "title",
    width: "100%",
    textAlign: "center",
  },
  cardContainer: {
    gridArea: "cards",
    width: "100%",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
  },
  inputContainer: {
    gridArea: "input",
    width: "60%",
    margin: "0 auto 20px",
    border: "1px solid grey",
    padding: "20px",
    borderRadius: "5px",
  },
  transactionsContainer: {
    gridArea: "transactions",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto 20px",
    borderRadius: "5px",
  },
});

export const App: React.FC = (): JSX.Element => {
  const cardsState = useAppSelector((state) => state.customerCards);
  const transactionsState = useAppSelector(
    (state) => state.customerTransactions
  );
  const { customerCards } = cardsState;
  const { activeTransactionsID, filterTerm, filteredTransactions } =
    transactionsState;

  const dispatch: AppDispatch = useAppDispatch();
  const {
    setCards,
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
      <div className={css(styles.wrapper)}>
        <h1 className={css(styles.title)}>Cards & Transactions</h1>

        <div className={css(styles.cardContainer)}>
          {customerCards.map(
            (
              card
            ): React.DetailedHTMLProps<
              React.HTMLAttributes<HTMLDivElement>,
              HTMLDivElement
            > => {
              return <CardFC key={card.id} card={card} />;
            }
          )}
        </div>

        {activeTransactionsID && (
          <input
            className={css(styles.inputContainer)}
            type="text"
            name="input"
            value={filterTerm}
            defaultValue="Filter"
            onChange={handleChange}
          />
        )}

        <div className={css(styles.transactionsContainer)}>
          {filteredTransactions.map((transaction): JSX.Element => {
            return (
              <TransactionFC key={transaction.id} transaction={transaction} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
