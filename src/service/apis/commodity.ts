import http from '..'

export const getCommodityDetail = (sku: string) => {
  return http.get(`/commodity/${sku}`).then((response) => response.data as Commodity)
}
