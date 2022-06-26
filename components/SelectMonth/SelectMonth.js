import React from 'react'

export default function SelectMonth({ month, setMonth }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <select data-testid="select" value={month} onChange={(e) => setMonth(e.target.value)}>
      <option>Selecione o mês</option>
      {months.map((month) => (
        <option data-testid="select-option" key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  )
}
