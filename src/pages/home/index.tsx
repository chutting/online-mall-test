import { ROUTE_PATH } from '@/routes'
import { Button } from 'antd'
import { generatePath, useHistory } from 'react-router'
import styles from './index.module.less'

const Home = () => {
  const history = useHistory()
  const handleGoToCommidityDetail = () => {
    history.push(generatePath(ROUTE_PATH.COMMODITY_DETAIL, { sku: 1 }))
  }

  return (
    <div>
      <div className={styles.comingSoon}>COMMODITIES LIST IS COMING SOON...</div>
      <Button type="primary" onClick={handleGoToCommidityDetail}>
        Click me to enjoy commodity 1 detail
      </Button>
    </div>
  )
}

export default Home
