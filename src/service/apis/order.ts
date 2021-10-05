import http from '..'

export const createOrder = (order: Order) => {
  return http.post(`/order`, order).then((response) => response.data)
}
