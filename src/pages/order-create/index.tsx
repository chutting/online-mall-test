import { useEffect, useState } from 'react'
import { memo } from 'react'
import { Button, message, Form } from 'antd'
import CustomForm from '@/components/form'
import { ORDER_STATUS } from '@/constants/orderStatus'
import { createOrder } from '@/service/apis/order'
import { sumCalculator } from '@/utils/sumCalculator'
import CommodityInfo from './components/commodityInfo'
import styles from './index.module.less'
import { getCommodityDetail } from '@/service/apis/commodity'
import { useParams } from 'react-router'

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
  const [totalPrice, setTotalPrice] = useState<string>('')
  const [amount, setAmount] = useState<number>(1)
  const routeParams = useParams<{ sku: string }>()
  const [commodity, setCommodity] = useState<Commodity>({} as Commodity)
  const [form] = Form.useForm()

  useEffect(() => {
    getCommodityDetail(routeParams.sku).then((data) => {
      setCommodity(data)
    })
  }, [routeParams.sku])

  const handleFinish = (values) => {
    const { sku, price } = commodity
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
    setTotalPrice(sumCalculator(commodity.price, amount))
  }, [commodity.price, amount])

  const handleSubmit = () => {
    form.submit()
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
          <CommodityInfo commodity={commodity} onAmountChange={setAmount} />
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
