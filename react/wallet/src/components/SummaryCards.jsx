import { formatCurrency } from "../utils/formatCurrency"

const SummaryCards = ({ transactions }) => {
  const totals = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') acc.income += transaction.amount
    else acc.expense += transaction.amount
    return acc
  }, { income: 0, expense: 0 })

  const balance = totals.income - totals.expense

  return (
    <section className="mb-14 md:mb-20">
      {/* Hero Balance */}
      <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 mb-6 transition-colors duration-500">
        <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-on-surface-variant opacity-50 mb-3">
          Saldo Total
        </p>
        <p className={`font-heading text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.02em] leading-none transition-colors duration-300 ${
          balance >= 0 ? 'text-primary' : 'text-secondary'
        }`}>
          {formatCurrency(balance)}
        </p>
      </div>

      {/* Income & Expense Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 hover:bg-surface-bright transition-colors duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </div>
            <p className="font-sans text-sm font-medium text-on-surface-variant">Receitas</p>
          </div>
          <p className="font-heading text-2xl md:text-3xl font-bold tracking-[-0.01em] text-primary">
            {formatCurrency(totals.income)}
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 hover:bg-surface-bright transition-colors duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
            <p className="font-sans text-sm font-medium text-on-surface-variant">Despesas</p>
          </div>
          <p className="font-heading text-2xl md:text-3xl font-bold tracking-[-0.01em] text-secondary">
            {formatCurrency(totals.expense)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SummaryCards