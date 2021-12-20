import { Input } from 'antd'
import styles from './index.module.less'

interface Props {
  onSearch: (value: string) => void
}

const Search = ({ onSearch }: Props) => {
  const handleSearch = (value) => {
    onSearch(value)
  }

  return <Input.Search placeholder="I am a search" onSearch={handleSearch} className={styles.search} />
}

export default Search
