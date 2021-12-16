import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import Form from '@/components/form'
import { useGlobalState } from '@/store/stores'
import { Input, Button, message } from 'antd'
import cls from 'classnames'
import { ORDER_STATUS } from '@/constants/orderStatus'

import styles from './index.module.less'
import { useForm } from 'antd/lib/form/Form'
import { createOrder } from '@/service/apis/order'
import { sumCalculator } from '@/utils/sumCalculator'

const formConfig = [
  {
    name: ['address', 'name'],
    rules: [{ required: true, message: 'Please input your name!' }],
    type: 'input',
    placeholder: 'Please input your name',
  },
  {
    name: ['address', 'phone'],
    rules: [
      { required: true, message: 'Please input your phone!' },
      { type: 'string', len: 11, pattern: /^1\d{10}$/, message: 'invalid phone' },
    ],
    placeholder: 'Please input your phone',
    type: 'input',
  },
  {
    name: ['address', 'address'],
    rules: [{ required: true, message: 'Please input your address!' }],
    type: 'textArea',
    placeholder: 'Please input your address',
    rest: {
      autoSize: { minRows: 3, maxRows: 5 },
    },
  },
]

const OrderCreate = () => {
  const { selectedCommdity } = useGlobalState()
  const [amount, setAmount] = useState<number>(1)
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true)
  const [totalPrice, setTotalPrice] = useState<string>('')
  const [form] = useForm()
  const handleFinish = (values) => {
    if (isNumberValid) {
      const { sku, price } = selectedCommdity
      createOrder({ sku, price, ...values, totalPrice, number: amount })
        .then((data) => {
          const { status, id } = data
          if (status === ORDER_STATUS.CREATED) {
            message.success({
              content: `您的订单提交成功，订单号为${id}`,
              duration: 5,
            })
          }
        })
        .catch(() => {
          message.error('您的订单提交失败')
        })
    }
  }

  useEffect(() => {
    setTotalPrice(sumCalculator(selectedCommdity.price, amount))
  }, [selectedCommdity.price, amount])

  const handleAmountChange = (e) => {
    const number = e.target.value.replace(/\D/, '').replace(/^0/, '')
    setAmount(number)
    setIsNumberValid(!!number)
    setTotalPrice(sumCalculator(selectedCommdity.price, number))
  }

  const handleSubmit = () => {
    form.submit()
  }

  return (
    <div className={styles.container}>
      <Form formConfig={formConfig} form={form} onFinish={handleFinish} />
      <div className={styles.commodityInfo}>
        <p className={styles.name}>{selectedCommdity.name}</p>
        <div className={cls(styles.priceInfo, { [styles.inValid]: !isNumberValid })}>
          <span className={styles.priceLabel}>price:</span>
          <span className={styles.price}>¥{selectedCommdity.price} x </span>
          <div className={styles.amount}>
            <Input
              onChange={handleAmountChange}
              value={amount}
              className={cls({ [styles.inValidInput]: !isNumberValid })}
            />
            {!isNumberValid && <p className={styles.invalidPrompt}>number should more than 0</p>}
          </div>
        </div>
        <div>总价: {totalPrice}</div>
      </div>
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default memo(OrderCreate)
