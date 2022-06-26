import { render, screen } from '@testing-library/react'
import Nav from '.'

describe('<Nav />', () => {
  it('should render correctly', () => {
    const { container } = render(<Nav />)
    expect(container).toMatchSnapshot()
  })
  it('should display month button', () => {
    const { container } = render(<Nav month={'June'} />)
    expect(screen.getByTestId('voltar')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver Detalhes' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
  it('should display not month button', () => {
    const { container } = render(<Nav />)
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
