import { useEffect, useState } from 'react'
import { memo } from 'react'
import CustomForm from '@/components/form'
import { useGlobalState } from '@/store/stores'
import { Button, message, Row, Col, Image, InputNumber, Form } from 'antd'
import { ORDER_STATUS } from '@/constants/orderStatus'

import styles from './index.module.less'
import { createOrder } from '@/service/apis/order'
import { sumCalculator } from '@/utils/sumCalculator'
import { generatePath, useHistory } from 'react-router'
import { ROUTE_PATH } from '@/routes'

const formConfig = [
  {
    name: ['address', 'name'],
    rules: [
      { required: true, message: '请输入收货人姓名！' },
      { max: 25, message: '长度不超过25个字符！' },
    ],
    type: 'input',
    placeholder: '请输入收货人姓名',
    label: '收货人姓名：',
  },
  {
    name: ['address', 'phone'],
    rules: [
      { required: true, message: '请输入手机号码！' },
      { type: 'string', len: 11, pattern: /^1\d{10}$/, message: '请输入正确的手机号码！' },
    ],
    placeholder: '请输入手机号码',
    type: 'input',
    label: '手机号码：',
  },
  {
    name: ['address', 'address'],
    rules: [{ required: true, message: '请输入详细地址！' }],
    type: 'textArea',
    placeholder: '请输入详细地址',
    label: '详细地址：',
    rest: {
      autoSize: { minRows: 3, maxRows: 5 },
    },
  },
]

const OrderCreate = () => {
  const { selectedCommdity } = useGlobalState()
  const [amount, setAmount] = useState<number>(1)
  const history = useHistory()
  const [totalPrice, setTotalPrice] = useState<string>('')
  const [form] = Form.useForm()
  const handleFinish = (values) => {
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

  useEffect(() => {
    setTotalPrice(sumCalculator(selectedCommdity.price, amount))
  }, [selectedCommdity.price, amount])

  const handleAmountChange = (value: number) => {
    setAmount(Math.floor(value) ?? 1)
    setTotalPrice(sumCalculator(selectedCommdity.price, value))
  }

  const handleSubmit = () => {
    form.submit()
  }

  const handleGoToCommodityDetail = () => {
    history.push(generatePath(ROUTE_PATH.COMMODITY_DETAIL, { sku: selectedCommdity.sku }))
  }

  return (
    <div className={styles.container}>
      <>
        <div className={styles.sectionTitle}>收货信息</div>
        <CustomForm onFinish={handleFinish} className={styles.shippingForm} form={form} formConfig={formConfig} />
      </>
      <div className={styles.commodityInfo}>
        <div className={styles.sectionTitle}>确认订单信息</div>
        <div className={styles.commodityContent}>
          <Row>
            <Col span={12}>
              <div className={styles.colTitle}>商品详情</div>
            </Col>
            <Col span={6}>
              <div className={styles.colTitle}>单价</div>
            </Col>
            <Col span={6}>
              <div className={styles.colTitle}>数量</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.colDetails}>
                <Image
                  preview={false}
                  className={styles.thumbnail}
                  src={selectedCommdity.images && selectedCommdity.images[0]}
                  onClick={handleGoToCommodityDetail}
                />
                <p className={styles.name}>{selectedCommdity.name}</p>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.colDetails}>¥{selectedCommdity.price}</div>
            </Col>
            <Col span={6}>
              <div className={styles.colDetails}>
                <InputNumber
                  onChange={handleAmountChange}
                  className={styles.amount}
                  value={amount}
                  min={1}
                  defaultValue={1}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <footer>
        <div className={styles.totalPriceContainer}>
          <span className={styles.title}>总价：</span>
          <div className={styles.totalPrice}>
            ¥ <span className={styles.value}>{totalPrice}</span>
          </div>
        </div>
        <Button className={styles.submit} onClick={handleSubmit}>
          提交订单
        </Button>
      </footer>
    </div>
  )
}

export default memo(OrderCreate)
