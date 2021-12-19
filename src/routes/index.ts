import Commodity from '@/pages/commodity'
import Home from '@/pages/home'
import OrderCreate from '@/pages/order-create'

export enum ROUTE_PATH {
  HOME = '/',
  COMMODITY_DETAIL = '/commodity/:sku',
  ORDER_CREATE = '/order-create',
}

export const routerConfig = [
  {
    name: 'home',
    path: ROUTE_PATH.HOME,
    component: Home,
  },
  {
    name: '商品详情',
    path: ROUTE_PATH.COMMODITY_DETAIL,
    component: Commodity,
  },
  {
    name: '订单创建',
    path: ROUTE_PATH.ORDER_CREATE,
    component: OrderCreate,
  },
]
