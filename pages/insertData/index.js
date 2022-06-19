import React, { useState } from 'react'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import { arrayUnion, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/initFirebase'
import { toast } from 'react-toastify'
import SelectMonth from '../../components/SelectMonth/SelectMonth'
export default function InsertData() {
  const [month, setMonth] = useState('jan')
  const [expenseType, setExpenseType] = useState('')
  const [category, setCategory] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const toastParameters = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-sm m-4 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'

  const createCategory = async () => {
    if (!expenseType)
      return toast.error('Você precisa selecionar o tipo de categoria', toastParameters)
    if (!category) return toast.error('Você precisa escrever o nome da categoria', toastParameters)
    await setDoc(
      doc(db, 'expenseTypes', expenseType),
      {
        categories: arrayUnion(category),
      },
      { merge: true }
    )
  }
  return (
    <div>
      <h2>Escolha o tipo de despesa</h2>
      <section className="flex ">
        <button
          className={buttonClass}
          onClick={() => setExpenseType('basic')}
          data-testid="basic-expenses"
          disabled={expenseType === 'basic'}
        >
          Despesas Básicas
        </button>
        <button
          className={buttonClass}
          onClick={() => setExpenseType('superfluous')}
          data-testid="superfluous-expenses"
          disabled={expenseType === 'superfluous'}
        >
          Despesas Supérfluas
        </button>
        <button
          className={buttonClass}
          onClick={() => setExpenseType('investments')}
          data-testid="investments"
          disabled={expenseType === 'investments'}
        >
          Investimentos
        </button>
      </section>
      <section>
        <h2>Escolha o mês</h2>
        <SelectMonth month={month} setMonth={setMonth} />
      </section>
      <br />
      <section>
        <h2>Escolha a categoria</h2>
        <CategorySelect expenseType={expenseType} />
      </section>
      <section>
        <h2>Insira o valor</h2>
        <input
          className="bg-slate-300 p-2 border rounded-lg placeholder:text-black"
          type="text"
          placeholder="250,78"
        />
      </section>
      <button className={buttonClass}>Salvar despesa</button>
      <div className="absolute w-full" style={{ top: '90vh', left: '10%' }}>
        <section className="">
          <input
            className="bg-slate-300 p-2 border rounded-lg placeholder:text-black"
            type="text"
            placeholder="Criar nova categoria"
            disabled={!expenseType}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className={`${buttonClass}`} onClick={() => createCategory()}>
            Criar categoria
          </button>
        </section>
      </div>
    </div>
  )
}
