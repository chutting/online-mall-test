import React, { useEffect, useState } from 'react'
import { getCommodityDetail } from '@/service/apis/commodity'
import { useHistory } from 'react-router-dom'
import { Button, Image } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import { useGlobalDispatch } from '@/store/stores'
import { actions } from '@/store/stores/actions'

const Commodity = () => {
  const history = useHistory()
  const globalDispatch = useGlobalDispatch()
  const [commodity, setCommodity] = useState<Commodity>({
    sku: '',
    name: '',
    description: '',
    price: '',
    image: {
      url: '',
      thumbnailUrl: '',
    },
  })

  useEffect(() => {
    const pathname = history.location.pathname.split('/')
    const sku = pathname[pathname.length - 1]
    getCommodityDetail(sku).then((data) => {
      setCommodity(data)
    })
  })

  const handleBuyNow = () => {
    globalDispatch({ type: actions.SET_COMMODITY, payload: commodity })
    history.push('/order-create')
  }

  return (
    <div className={styles.container}>
      <Image width={200} src={commodity.image.url} className={styles.image} />
      <div className={styles.info}>
        <h1>{commodity.name}</h1>
        <h2>{commodity.description}</h2>
        <div className={styles.priceContainer}>
          price: <span className={styles.price}>¥{commodity.price}</span>
        </div>
        <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={handleBuyNow}>
          立即购买
        </Button>
      </div>
    </div>
  )
}

export default Commodity
