import { useEffect, useState } from "react"
import SummaryCards from "./components/SummaryCards"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import EditModal from "./components/EditModal"
import { useTheme } from "./context/ThemeContext"

function App() {
  const { theme, toggleTheme } = useTheme()

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
    setTransactions(prev => [...prev, transaction])
  }

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const openEditModal = (transaction) => {
    setEditingTransaction(transaction)
  }

  const saveEditTransaction = (updated) => {
    setTransactions(prev => prev.map(t => t.id === updated.id ? updated : t))
  }

  return (
    <div className="min-h-screen bg-surface transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 md:py-14">
        {/* Header */}
        <header className="flex items-center justify-between mb-14 md:mb-20">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant opacity-60 mb-2">
              The Editorial Ledger
            </p>
            <h1 className="font-heading text-4xl md:text-[3.5rem] font-bold tracking-[-0.02em] text-on-surface leading-none">
              My Wallet
            </h1>
          </div>
          <button
          type="button"
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center transition-all duration-300 cursor-pointer group"
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-on-surface transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-on-surface transition-transform duration-300 group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
        </header>

        <SummaryCards transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={openEditModal} />

        {editingTransaction && (
          <EditModal
            transactionData={editingTransaction}
            saveTransaction={saveEditTransaction}
            closeEditModal={() => setEditingTransaction(null)}
          />
        )}
      </div>
    </div>
  )
}

export default App
