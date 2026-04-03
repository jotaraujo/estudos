import { formatCurrency } from "../utils/formatCurrency"

const SummaryCards = ({ transactions }) => {

  const totals = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') acc.income += transaction.amount
    else acc.expense += transaction.amount
    return acc
  }, {income: 0, expense: 0})

  const balance = totals.income - totals.expense

  return (
    <div>
      <div>
        <h2>Income</h2>
        <p>{formatCurrency(totals.income)}</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p>{formatCurrency(totals.expense)}</p>
      </div>
      <div>
        <h2>Balance</h2>
        <p>{formatCurrency(balance)}</p>
      </div>
    </div>
  )
}

export default SummaryCards