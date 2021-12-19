import { Input } from 'antd'
import styles from './index.module.less'

const Search = () => {
  const handleSearch = (value) => {
    console.log(`search ${value}`)
  }

  return <Input.Search placeholder="I am a search" onSearch={handleSearch} className={styles.search} />
}

export default Search
