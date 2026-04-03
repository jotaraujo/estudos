import { formatCurrency } from "../utils/formatCurrency"

const TransactionItem = ({ transaction, deleteTransaction, editTransaction }) => {
  const isIncome = transaction.type === 'income'

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 md:p-6 flex items-center gap-4 hover:bg-surface-bright transition-all duration-300 group">
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
        isIncome ? 'bg-primary/10' : 'bg-secondary/10'
      }`}>
        {isIncome ? (
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        )}
      </div>

      {/* Description & Type */}
      <div className="flex-1 min-w-0">
        <p className="font-sans text-base font-medium text-on-surface truncate">
          {transaction.description}
        </p>
        <p className="font-sans text-xs text-on-surface-variant opacity-50 uppercase tracking-wider mt-0.5">
          {isIncome ? 'Receita' : 'Despesa'}
        </p>
      </div>

      {/* Amount */}
      <p className={`font-heading text-lg md:text-xl font-bold tracking-tight shrink-0 ${
        isIncome ? 'text-primary' : 'text-secondary'
      }`}>
        {isIncome ? '+' : '-'} {formatCurrency(transaction.amount)}
      </p>

      {/* Actions */}
      <div className="flex gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shrink-0">
        <button
          type="button"
          onClick={() => editTransaction(transaction)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200 cursor-pointer"
          aria-label="Editar transação"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => deleteTransaction(transaction.id)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary/10 hover:text-secondary transition-colors duration-200 cursor-pointer"
          aria-label="Excluir transação"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TransactionItem