import { useState } from "react"

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || amount <= 0) return
    addTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type
    })
    setDescription('')
    setAmount('')
    setType('income')
  }

  return (
    <section className="mb-14 md:mb-20">
      <h2 className="font-heading text-xl md:text-2xl font-semibold text-on-surface tracking-[-0.01em] mb-6">
        Nova Transação
      </h2>
      <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 transition-colors duration-500">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="description" className="block font-sans text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-60 mb-2">
                Descrição
              </label>
              <input
                id="description"
                type="text"
                placeholder="Ex: Supermercado"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary px-0 py-3 text-on-surface font-sans text-base placeholder:text-outline-variant outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block font-sans text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-60 mb-2">
                Valor (R$)
              </label>
              <input
                id="amount"
                type="number"
                placeholder="0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary px-0 py-3 text-on-surface font-sans text-base placeholder:text-outline-variant outline-none transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
            <div className="flex-1">
              <span className="block font-sans text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-60 mb-3">
                Tipo
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setType('income')}
                  className={`flex-1 py-2.5 px-5 rounded-full text-sm font-semibold font-sans transition-all duration-300 cursor-pointer ${
                    type === 'income'
                      ? 'bg-linear-to-r from-primary to-primary-container text-on-primary shadow-[0_4px_16px_rgba(46,125,50,0.3)]'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Receita
                </button>
                <button
                  type="button"
                  onClick={() => setType('expense')}
                  className={`flex-1 py-2.5 px-5 rounded-full text-sm font-semibold font-sans transition-all duration-300 cursor-pointer ${
                    type === 'expense'
                      ? 'bg-linear-to-r from-secondary to-secondary-container text-on-secondary shadow-[0_4px_16px_rgba(211,47,47,0.3)]'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Despesa
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="py-3 px-8 rounded-full bg-primary text-on-primary font-sans font-semibold text-sm tracking-wide hover:shadow-[0_8px_24px_rgba(46,125,50,0.25)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TransactionForm