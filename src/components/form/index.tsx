import { Form, FormInstance, Input, InputNumber } from 'antd'

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
  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 5 }} labelAlign="left" className={className}>
      {formConfig.map(({ name, rules, placeholder, type, label, rest }) => (
        <div key={label}>
          <Form.Item label={label} name={name} rules={rules}>
            {type === 'input' && <Input placeholder={placeholder} {...rest} />}
            {type === 'inputNumber' && <InputNumber />}
            {type === 'textArea' && <Input.TextArea placeholder={placeholder} {...rest} />}
          </Form.Item>
        </div>
      ))}
    </Form>
  )
}

export default CustomForm
