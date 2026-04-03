import { useState } from "react"

const EditModal = ({ transactionData, saveTransaction, closeEditModal }) => {
  const [description, setDescription] = useState(transactionData.description)
  const [amount, setAmount] = useState(transactionData.amount)
  const [type, setType] = useState(transactionData.type)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || amount <= 0) return
    saveTransaction({
      id: transactionData.id,
      description,
      amount: parseFloat(amount),
      type
    })
    closeEditModal()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphic Backdrop */}
      <div
        className="absolute inset-0 bg-on-surface/30 backdrop-blur-[20px]"
      />

      {/* Modal Card */}
      <div className="animate-modal relative bg-[color-mix(in_srgb,var(--color-surface)_95%,transparent)] backdrop-blur-xl rounded-3xl p-8 md:p-10 w-full max-w-lg shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <h2 className="font-heading text-2xl font-semibold text-on-surface tracking-[-0.01em] mb-8">
          Editar Transação
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <span className="block font-sans text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-60 mb-2">
              Descrição
            </span>
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary px-0 py-3 text-on-surface font-sans text-base placeholder:text-outline-variant outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <span className="block font-sans text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-60 mb-2">
              Valor (R$)
            </span>
            <input
              type="number"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary px-0 py-3 text-on-surface font-sans text-base placeholder:text-outline-variant outline-none transition-colors duration-300"
            />
          </div>

          <div>
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

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={closeEditModal}
              className="flex-1 py-3 px-6 rounded-full bg-surface-container text-on-surface-variant font-sans font-semibold text-sm hover:bg-surface-container-high transition-colors duration-300 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-6 rounded-full bg-primary text-on-primary font-sans font-semibold text-sm hover:shadow-[0_8px_24px_rgba(46,125,50,0.25)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditModal