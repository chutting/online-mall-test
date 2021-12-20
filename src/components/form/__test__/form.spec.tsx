import { render } from '@testing-library/react'
import CustomForm from '../index'

const mockFormConfig = [
  {
    name: ['field1'],
    rules: [{ required: true, message: 'fake required message' }],
    type: 'input',
    placeholder: 'field1 mock placeholder',
    label: 'field1 mock label',
  },
  {
    name: ['field2'],
    type: 'inputNumber',
    placeholder: 'field2 mock placeholder',
    label: 'field2 mock label',
  },
]

describe('form components test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<CustomForm formConfig={mockFormConfig} onFinish={jest.fn()} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
