import React from 'react'

export default function SelectMonth({ month, setMonth }) {
  return (
    <select data-testid="select" value={month} onChange={(e) => setMonth(e.target.value)}>
      <option data-testid="select-option" value="jan">
        Janeiro
      </option>
      <option data-testid="select-option" value="fev">
        Fevereiro
      </option>
      <option data-testid="select-option" value="mar">
        Março
      </option>
      <option data-testid="select-option" value="apr">
        Abril
      </option>
      <option data-testid="select-option" value="mai">
        Maio
      </option>
      <option data-testid="select-option" value="jun">
        Junho
      </option>
      <option data-testid="select-option" value="jul">
        Julho
      </option>
      <option data-testid="select-option" value="ago">
        Agosto
      </option>
      <option data-testid="select-option" value="set">
        Setembro
      </option>
      <option data-testid="select-option" value="out">
        Oututubro
      </option>
      <option data-testid="select-option" value="nov">
        Novembro
      </option>
      <option data-testid="select-option" value="dez">
        Dezembro
      </option>
    </select>
  )
}
