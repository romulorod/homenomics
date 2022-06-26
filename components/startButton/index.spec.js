import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StartButton from './startButton'

describe('Render Add expense button', () => {
  it('Should render Add expense button', () => {
    render(<StartButton />)
    expect(screen.getByTestId('insert-data')).toBeInTheDocument()
    expect(screen.getByTestId('insert-data')).toHaveAttribute('href', '/insertData')
    expect(screen.getByTestId('insert-data')).toHaveTextContent(/add expense/i)
  })
})
describe('Render Month report button', () => {
  it('Should render Month reports button', () => {
    render(<StartButton />)
    expect(screen.getByTestId('month-reports')).toBeInTheDocument()
    expect(screen.getByTestId('month-reports')).toHaveAttribute('href', '/month-report')
    expect(screen.getByTestId('month-reports')).toHaveTextContent(/month report/i)
  })
})
