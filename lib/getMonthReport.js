import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/initFirebase'

const expensesRef = doc(db, 'expenses', new Date().toLocaleString('default', { month: 'long' }))

export const getData = async () => {
  const expenseData = await getDoc(expensesRef)
  const data = []
  if (expenseData.exists()) {
    const dbData = expenseData.data()
    const categories = Object.keys(dbData)

    const sumByName = categories.reduce((acc, curr) => {
      acc[curr] = dbData[curr].reduce((acc, curr) => acc + curr.value, 0)
      return acc
    }, {})
    for (let index in Object.keys(sumByName)) {
      const type = dbData[Object.keys(sumByName)[index]]
        .map((item) => item.expenseType)[0]
        .toString()
      data.push({
        name: Object.keys(sumByName)[index],
        Básico: type == 'basic' ? Object.values(sumByName)[index] : 0,
        Supérfluo: type == 'basic' ? 0 : Object.values(sumByName)[index],
      })
    }
    return [...data]
  } else {
    console.log('No such document!')
  }
}

export const expensesByType = async () => {
  return (await getData()).map((item) => {
    return {
      basic: item.Básico,
      superfluous: item.Supérfluo,
    }
  })
}

export const totalExpensesByType = async () => {
  return (await expensesByType()).reduce(
    (a, b) => {
      return {
        basic: a?.basic + b.basic,
        superfluous: a?.superfluous + b.superfluous,
      }
    },
    { basic: 0, superfluous: 0 }
  )
}
