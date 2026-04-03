import { useEffect, useState } from "react"
import SummaryCards from "./components/SummaryCards"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import EditModal from "./components/EditModal"

function App() {

  const STORAGE_KEY = 'wallet-transactions'

  const initialTransactions = [
    { id: 1, description: "Salary", amount: 5000, type: "income" },
    { id: 2, description: "Rent", amount: 2500, type: "expense" },
  ]

  const loadTransactions = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : initialTransactions
    } catch {
      return initialTransactions
    }
  }

  const [transactions, setTransactions] = useState(loadTransactions)
  const [editingTransaction, setEditingTransaction] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])



  const addTransaction = (transaction) => {
    setTransactions(prevTransactions => [...prevTransactions, transaction])
  }

  const deleteTransaction = (id) => {
    setTransactions(prevTransactions => prevTransactions.filter(transaction => transaction.id !== id))
  }

  const openEditModal = (transaction) => {
    setEditingTransaction(transaction)
  }

  const saveEditTransaction = (updateTransaction) => {
    setTransactions(prevTransactions => prevTransactions.map(transaction => transaction.id === updateTransaction.id ? updateTransaction : transaction))
  }



  return (
    <div>
      <h1>My Wallet</h1>
      <SummaryCards transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={openEditModal} />
      {editingTransaction && (
        <EditModal transactionData={editingTransaction} saveTransaction={saveEditTransaction} closeEditModal={() => setEditingTransaction(null)} />
      )}
    </div>
  )
}

export default App
