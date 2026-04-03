import TransactionItem from "./TransactionItem"

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <section>
      <h2 className="font-heading text-xl md:text-2xl font-semibold text-on-surface tracking-[-0.01em] mb-6">
        Histórico de Transações
      </h2>
      <div className="space-y-3">
        {transactions.length === 0 ? (
          <div className="bg-surface-container-low rounded-2xl p-10 text-center transition-colors duration-500">
            <p className="font-sans text-on-surface-variant/50 text-sm">
              Nenhuma transação registrada.
            </p>
          </div>
        ) : (
          transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              editTransaction={editTransaction}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default TransactionList