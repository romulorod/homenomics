/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StartButton from './startButton'

describe('Render Get Started Button', () => {
  it('Should render Get Started Button', () => {
    render(<StartButton />)

    expect(screen.getByTestId('home-link')).toBeInTheDocument()
  })
})
