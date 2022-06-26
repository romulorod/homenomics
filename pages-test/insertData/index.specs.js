import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InsertData from '../../pages/insertData'

describe('Render Insert Data Page', () => {
  it('Should render select tag', () => {
    render(<InsertData />)
    const select = screen.getByTestId('select')
    expect(select).toBeInTheDocument()
  })
  it('Should render select months options', () => {
    render(<InsertData />)
    const select = screen.getByTestId('select')
    expect(select).toHaveValue('jan')
  })
  it('Should select a option', () => {
    const { getByTestId, getAllByTestId } = render(<InsertData />)
    fireEvent.change(getByTestId('select'), { target: { value: 'jun' } })
    let options = getAllByTestId('select-option')
    expect(options[0]).toHaveValue('jan')
    expect(options[5].selected).toBeTruthy()
  })
  it('Should render input text', () => {
    render(<InsertData />)
    expect(screen.getByTestId('select-category')).toBeInTheDocument()
  })
  it('Should render main category button', () => {
    render(<InsertData />)
    expect(screen.getByTestId('basic-expenses')).toBeInTheDocument()
    expect(screen.getByTestId('superfluous-expenses')).toBeInTheDocument()
    expect(screen.getByTestId('investments')).toBeInTheDocument()
  })
  it('Should render main category button', () => {
    render(<InsertData />)
    const button = screen.getByTestId('basic-expenses')
    fireEvent.click(button)
    expect(button).toBeDisabled()
  })
})
