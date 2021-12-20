import { render, fireEvent } from '@testing-library/react'
import Search from '..'

describe('search components test', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Search onSearch={jest.fn()} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onSearch when click search icon', () => {
    const handleSearch = jest.fn()
    const { getByRole } = render(<Search onSearch={handleSearch} />)
    fireEvent.change(getByRole('textbox'), { target: { value: 'fake search content' } })
    fireEvent.click(getByRole('button'))
    expect(handleSearch).toBeCalledWith('fake search content')
  })
})
