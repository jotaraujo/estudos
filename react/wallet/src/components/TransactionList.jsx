import TransactionItem from "./TransactionItem"

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <div>
      <h2>Your Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList