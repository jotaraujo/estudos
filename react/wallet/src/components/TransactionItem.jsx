import { formatCurrency } from "../utils/formatCurrency"

const TransactionItem = ({ transaction, deleteTransaction, editTransaction }) => {

  return (
    <li>
      <span>{transaction.description}</span>
      <span style={{ color: transaction.type === "income" ? "green" : "red" }}>
        {formatCurrency(transaction.amount)}
      </span>
      <span>{transaction.type}</span>
      <button type="button" onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      <button type="button" onClick={() => editTransaction(transaction)}>Edit</button>
    </li>
  )
}

export default TransactionItem