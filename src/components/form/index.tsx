import React from 'react'
import { Form, Input, InputNumber } from 'antd'
import { FormInstance } from 'antd/lib/form'

interface formItem {
  name: string[] | string
  placeholder?: string
  type: string
  rules: any[]
  rest?: unknown
}

interface IProps {
  formConfig: formItem[]
  form: FormInstance
  onFinish: (values) => void
}

const CustomForm = ({ formConfig, form, onFinish }: IProps) => {
  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 5 }} labelAlign="left">
      {formConfig.map(({ name, rules, placeholder, type, rest }) => (
        <div key={name[1]}>
          {type === 'input' && (
            <Form.Item label={name[1]} name={name} rules={rules}>
              <Input placeholder={placeholder} />
            </Form.Item>
          )}
          {type === 'inputNumber' && (
            <Form.Item key={name[1]} label={name[1]} name={name} rules={rules}>
              <InputNumber />
            </Form.Item>
          )}
          {type === 'textArea' && (
            <Form.Item key={name[1]} label={name[1]} name={name} rules={rules}>
              <Input.TextArea placeholder={placeholder} {...rest} />
            </Form.Item>
          )}
        </div>
      ))}
    </Form>
  )
}

export default CustomForm
