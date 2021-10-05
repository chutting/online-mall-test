interface Order {
  sku: string
  price: string
  number: number
  totalPrice: string
  status: string
  address: {
    name: string
    address: string
    phone: string
  }
}
