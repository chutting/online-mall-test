import { useHistory, generatePath } from 'react-router'
import { Row, Col, Image, InputNumber } from 'antd'
import { ROUTE_PATH } from '@/routes'
import styles from './index.module.less'

interface Props {
  commodity: Commodity
  onAmountChange: (amount: number) => void
}

const CommodityInfo = ({ commodity, onAmountChange }: Props) => {
  const history = useHistory()

  const handleGoToCommodityDetail = () => {
    history.push(generatePath(ROUTE_PATH.COMMODITY_DETAIL, { sku: commodity.sku }))
  }

  return (
    <>
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
              src={commodity.images && commodity.images[0]}
              onClick={handleGoToCommodityDetail}
            />
            <p className={styles.name}>{commodity.name}</p>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.colDetails}>¥{commodity.price}</div>
        </Col>
        <Col span={6}>
          <div className={styles.colDetails}>
            <InputNumber onChange={onAmountChange} className={styles.amount} min={1} defaultValue={1} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CommodityInfo
