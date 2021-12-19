import { Form, Input, InputNumber } from 'antd'
import { FormInstance } from 'antd/lib/form'

interface formItem {
  name: string[] | string
  placeholder?: string
  type: string
  rules: any[]
  rest?: unknown
  label: string
}

interface IProps {
  formConfig: formItem[]
  form: FormInstance
  onFinish: (values) => void
  className: string
}

const CustomForm = ({ formConfig, form, onFinish, className }: IProps) => {
  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 5 }} labelAlign="left" className={className}>
      {formConfig.map(({ name, rules, placeholder, type, label, rest }) => (
        <div key={label}>
          {type === 'input' && (
            <Form.Item label={label} name={name} rules={rules}>
              <Input placeholder={placeholder} />
            </Form.Item>
          )}
          {type === 'inputNumber' && (
            <Form.Item key={label} label={label} name={name} rules={rules}>
              <InputNumber />
            </Form.Item>
          )}
          {type === 'textArea' && (
            <Form.Item key={label} label={label} name={name} rules={rules}>
              <Input.TextArea placeholder={placeholder} {...rest} />
            </Form.Item>
          )}
        </div>
      ))}
    </Form>
  )
}

export default CustomForm
