import { useEffect, useMemo, useState } from 'react'
import cls from 'classnames'
import { getCommodityDetail } from '@/service/apis/commodity'
import { useParams, useHistory, generatePath } from 'react-router-dom'
import { Button, Image } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { ROUTE_PATH } from '@/routes'
import styles from './index.module.less'

const Commodity = () => {
  const routeParams = useParams<{ sku: string }>()
  const history = useHistory()
  const [selectedImage, setSelectedImage] = useState<{ url: string | null; index: number }>({ url: null, index: 0 })
  const [commodity, setCommodity] = useState<Commodity>({
    sku: '',
    name: '',
    description: '',
    price: '',
    images: [],
    commentsCount: 0,
    salesCount: 0,
  })

  const previewImage = useMemo(() => {
    return selectedImage.url ? selectedImage.url : commodity.images[0]
  }, [commodity, selectedImage])

  useEffect(() => {
    getCommodityDetail(routeParams.sku).then((data) => {
      setCommodity(data)
    })
  }, [routeParams.sku])

  const handleBuyNow = () => {
    history.push(generatePath(ROUTE_PATH.ORDER_CREATE, { sku: commodity.sku }))
  }

  const handleShowImage = (index: number, url: string) => {
    setSelectedImage({ index, url })
  }

  return (
    <div className={styles.container}>
      <Image src={previewImage} className={styles.preview} />
      <div className={styles.info}>
        <h1>{commodity.name}</h1>
        <h2>{commodity.description}</h2>
        <div className={styles.priceContainer}>
          price: <span className={styles.price}>¥{commodity.price}</span>
        </div>
        <div className={styles.salesInfo}>
          <div className={styles.salesInfoItem}>
            月销量：<span className={styles.value}>{commodity.salesCount}</span>
          </div>
          <div className={styles.salesInfoItem}>
            累计评价：<span className={styles.value}>{commodity.commentsCount}</span>
          </div>
        </div>
        <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={handleBuyNow}>
          立即购买
        </Button>
        <div className={styles.thumbnailContainer}>
          {commodity.images.map((image, index) => (
            <div key={image} className={cls(styles.thumbnail, { [styles.selected]: index === selectedImage?.index })}>
              <Image src={image} onClick={() => handleShowImage(index, image)} preview={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commodity
