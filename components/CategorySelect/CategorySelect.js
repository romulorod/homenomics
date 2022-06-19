import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../firebase/initFirebase'
import { doc, getDoc } from 'firebase/firestore'

export default function CategorySelect({ expenseType, setCategory }) {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function getCategories() {
      if (expenseType) {
        const docRef = doc(db, 'expenseTypes', expenseType)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setCategories(docSnap.data().categories)
        } else {
          setCategories([])
        }
      }
    }
    getCategories()
  }, [expenseType, categories])
  return (
    <select data-testid="select-category" onChange={(e) => setCategory(e.target.value)}>
      <option data-testid="select-option">Selecione a categoria</option>
      {categories.map((category) => (
        <option key={category} data-testid="select-option" value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}
