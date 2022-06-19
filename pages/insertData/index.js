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
    try {
      await setDoc(
        doc(db, 'expenseTypes', expenseType),
        {
          categories: arrayUnion(category),
        },
        { merge: true }
      )
      toast.success('Categoria criada com sucesso')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível criar sua categoria')
    }
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <h2>Escolha o tipo de despesa</h2>
      <section className="flex m-4 items-center flex-wrap justify-evenly">
        <div>
          <input
            type="radio"
            name="expense-type"
            data-testid="basic-expenses"
            value="basic"
            onClick={(e) => setExpenseType(e.target.value)}
          />
          <label className="ml-1">Despesas Básicas</label>
        </div>
        <div>
          <input
            type="radio"
            name="expense-type"
            data-testid="superfluous-expenses"
            value="superfluous"
            onClick={(e) => setExpenseType(e.target.value)}
          />

          <label className="ml-1">Despesas Supérfluas</label>
        </div>
        <div>
          <input
            type="radio"
            name="expense-type"
            data-testid="investments"
            value="investments"
            onClick={(e) => setExpenseType(e.target.value)}
          />
          <label className="ml-1">Investimentos</label>
        </div>
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
      <div className="flex items-center justify-center mt-24">
        <section className="">
          <input
            className="bg-slate-300 p-2 border rounded-lg placeholder:text-black"
            type="text"
            placeholder="Criar nova categoria"
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
