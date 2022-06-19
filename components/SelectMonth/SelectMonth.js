import React from 'react'

export default function SelectMonth({ month, setMonth }) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
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
