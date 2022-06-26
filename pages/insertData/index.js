import React, { useState } from 'react'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/initFirebase'
import { toast } from 'react-toastify'
import SelectMonth from '../../components/SelectMonth/SelectMonth'
import Nav from '../../components/Nav'

export default function InsertData() {
  const [month, setMonth] = useState('')
  const [expenseType, setExpenseType] = useState('')
  const [category, setCategory] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [value, setValue] = useState(0)

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
    if (!newCategory)
      return toast.error('Você precisa escrever o nome da categoria', toastParameters)
    const capitalizedCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1)
    try {
      await setDoc(
        doc(db, 'expenseTypes', expenseType),
        {
          categories: arrayUnion(capitalizedCategory),
        },
        { merge: true }
      )
      toast.success('Categoria criada com sucesso')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível criar sua categoria')
    }
  }
  const saveExpense = async () => {
    if (!month) return toast.error('O mês não foi selecionado')
    if (!category) return toast.error('A categoria não foi selecionada')
    if (!value) return toast.error('Você esqueceu de digitar o valor')
    if (!expenseType) return toast.error('Qual é o tipo de despesa?')
    const expensesRef = doc(db, 'expenses', month)
    const data = {
      [category]: arrayUnion({
        month,
        expenseType,
        value,
      }),
    }
    try {
      const docSnap = await getDoc(expensesRef)
      if (docSnap.exists()) {
        await updateDoc(doc(db, 'expenses', month), data)
      } else {
        await setDoc(doc(db, 'expenses', month), data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <Nav buttonClass={buttonClass} month={month} />
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
        <CategorySelect expenseType={expenseType} setCategory={setCategory} />
      </section>
      <section>
        <h2>Insira o valor</h2>
        <input
          className="bg-slate-300 p-2 border rounded-lg placeholder:text-grey"
          type="number"
          placeholder="250.78"
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
      </section>
      <button className={buttonClass} onClick={() => saveExpense()}>
        Salvar despesa
      </button>
      <div className="flex items-center justify-center mt-24">
        <section className="">
          <input
            className="bg-slate-300 p-2 border rounded-lg placeholder:text-grey"
            type="text"
            placeholder="Criar nova categoria"
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button className={`${buttonClass}`} onClick={() => createCategory()}>
            Criar categoria
          </button>
        </section>
      </div>
    </div>
  )
}
