import http from '..'

export function getCommodityDetail(sku: string) {
  return http.get(`/commodity/${sku}`)
}
