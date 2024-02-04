import products from '../data/products.js'
import formatCurrency from '../utils/formatCurrency.js'

const name = document.getElementById('name')
const image = document.getElementById('image')
const price = document.getElementById('price')
const desc = document.getElementById('desc')

const params = new URL(document.location).searchParams
const productId = params.get('id')

// Hàm Callback
const product = products.find(function (p) {
  // if (p.id == productId) {
  //   return true
  // } else {
  //   return false
  // }
  return p.id == productId
})

if (product) {
  name.innerHTML = product.name
  price.innerHTML = formatCurrency(product.price)
  desc.innerHTML = product.desc
  image.setAttribute('src', product.image)
}
