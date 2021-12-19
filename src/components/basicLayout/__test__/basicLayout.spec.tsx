import { render, fireEvent } from '@testing-library/react'
import BasicLayout from '../index'

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('basicInfo components test', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<BasicLayout />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should go to home page when click logo', () => {
    const { getByText } = render(<BasicLayout />)
    fireEvent.click(getByText('TW ONLINE MALL'))
    expect(mockHistoryPush).toBeCalledWith('/')
  })
})
