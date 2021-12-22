import { Form, FormInstance, Input, InputNumber } from 'antd'
import { useCallback } from 'react'

interface formItem {
  name: string[] | string
  placeholder?: string
  type: string
  rules?: any[]
  label?: string
  rest?: unknown
}

interface IProps {
  formConfig: formItem[]
  form?: FormInstance
  onFinish: (values) => void
  className?: string
}

const CustomForm = ({ formConfig, form, onFinish, className }: IProps) => {
  const getFormItem = useCallback((config) => {
    const { placeholder, type, rest } = config
    switch (type) {
      case 'input':
        return <Input placeholder={placeholder} {...rest} />
      case 'inputNumber':
        return <InputNumber />
      case 'textArea':
        return <Input.TextArea placeholder={placeholder} {...rest} />
    }
  }, [])

  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 5 }} labelAlign="left" className={className}>
      {formConfig.map(({ name, rules, placeholder, type, label, rest }) => (
        <div key={label}>
          <Form.Item label={label} name={name} rules={rules}>
            {getFormItem({ placeholder, type, rest })}
          </Form.Item>
        </div>
      ))}
    </Form>
  )
}

export default CustomForm
