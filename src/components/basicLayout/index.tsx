import { ROUTE_PATH } from '@/routes'
import { PropsWithChildren } from 'react'
import { useHistory } from 'react-router'
import Search from '../search'
import styles from './index.module.less'

const BasicLayout = ({ children }: PropsWithChildren<{}>) => {
  const history = useHistory()
  const handleGoToHome = () => {
    history.push(ROUTE_PATH.HOME)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo} onClick={handleGoToHome}>
            TW ONLINE MALL
          </div>
          <Search />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default BasicLayout
