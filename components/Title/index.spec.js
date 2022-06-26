import { fireEvent, render, screen } from '@testing-library/react'
import Title from './Title'
import '@testing-library/jest-dom'

describe('Render title', () => {
  it('should render Title', () => {
    render(<Title />)
    expect(screen.getByText(/Homenomics/)).toBeTruthy()
  })

  it('Should render SVG pie chart', () => {
    render(<Title />)
    const img = screen.getByAltText(/Pie chart/i)
    expect(screen.getByRole('img')).toBeTruthy()
  })
})
