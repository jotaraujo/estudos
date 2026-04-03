import { useState } from "react"

const EditModal = ({ transactionData, saveTransaction, closeEditModal }) => {
  const [description, setDescription] = useState(transactionData.description)
  const [amount, setAmount] = useState(transactionData.amount)
  const [type, setType] = useState(transactionData.type)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || amount <= 0) return
    const transaction = {
      id: transactionData.id,
      description,
      amount: parseFloat(amount),
      type
    }
    saveTransaction(transaction)
    closeEditModal()
  }

  return (
    <div>
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  )
}

export default EditModal