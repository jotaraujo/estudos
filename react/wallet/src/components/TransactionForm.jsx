import { useState } from "react"

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || amount <= 0) return
    const transaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type
    }
    addTransaction(transaction)
    setDescription('')
    setAmount('')
    setType('income')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm