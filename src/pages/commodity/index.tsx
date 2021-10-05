import React, { useEffect } from 'react'
import { getCommodityDetail } from '@/service/apis/commodity'
import { useHistory } from 'react-router-dom'

const Commodity = () => {
  const history = useHistory()
  useEffect(() => {
    console.log(history)
    getCommodityDetail('1').then((data) => {
      console.log('data', data)
    })
  })

  return <h1>商品</h1>
}

export default Commodity
