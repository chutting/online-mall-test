import Commodity from '@/pages/commodity'
import OrderCreate from '@/pages/order-create'

export const routerConfig = [
  {
    name: '商品详情',
    path: '/commodity/:sku',
    component: Commodity,
  },
  {
    name: '订单创建',
    path: '/order-create',
    component: OrderCreate,
  },
]
