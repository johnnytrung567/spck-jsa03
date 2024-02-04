import products from '../data/products.js'
import formatCurrency from '../utils/formatCurrency.js'
import displayOnNavbar from '../helper/displayOnNavbar.js'

// Xu ly nguoi dung o Navbar

displayOnNavbar()

// Xu ly dang xuat
const logoutBtn = document.getElementById('logout-btn')
logoutBtn.onclick = function () {
  localStorage.removeItem('user')
  window.location.href = '/login'
}

function renderProducts(products) {
  const productList = document.getElementById('product-list')
  productList.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    const product = products[i]

    // Tạo ảnh
    const productImage = document.createElement('img')
    productImage.classList.add('product-img')
    productImage.setAttribute('src', product.image)

    // Tạo thẻ a bọc ảnh
    const productImageLink = document.createElement('a')
    productImageLink.setAttribute(
      'href',
      '../detail/index.html?id=' + product.id
    )
    productImageLink.appendChild(productImage)

    // Tạo tên
    const productName = document.createElement('a')
    productName.setAttribute('href', '../detail/index.html?id=' + product.id)
    productName.classList.add('product-name')
    productName.innerHTML = product.name

    // Tạo giá mới
    const newPrice = document.createElement('span')
    newPrice.classList.add('new-price')
    newPrice.innerHTML = formatCurrency(product.price)

    // Tạo thẻ div bọc các giá bán
    const productPrices = document.createElement('div')
    productPrices.classList.add('product-prices')
    productPrices.appendChild(newPrice)

    // Tao nut them vao gio hang
    const addToCartBtn = document.createElement('button')
    addToCartBtn.innerHTML = 'Thêm vào giỏ hàng'
    addToCartBtn.classList.add('btn', 'btn-primary', 'w-100', 'mt-3')

    // Tạo thẻ product và thêm các phần tử con vào
    const productTag = document.createElement('div')
    productTag.classList.add('product')
    productTag.appendChild(productImageLink)
    productTag.appendChild(productName)
    productTag.appendChild(productPrices)
    productTag.appendChild(addToCartBtn)

    // Tạo thẻ product wrapper
    const productWrapper = document.createElement('div')
    productWrapper.classList.add(
      'col-12',
      'col-sm-6',
      'col-md-4',
      'col-lg-3',
      'p-3'
    )
    productWrapper.appendChild(productTag)

    // Gắn những sp tạo động vào trong product list
    productList.appendChild(productWrapper)
  }
}
renderProducts(products)

// Tìm kiếm sản phẩm
const searchInput = document.getElementById('search-input')
searchInput.oninput = function (event) {
  const text = event.target.value
  searchProducts(text)
}

function searchProducts(text) {
  const productsCopy = [...products]
  const searchText = text.toLowerCase().trim()
  if (searchText === '') {
    renderProducts(productsCopy)
  } else {
    const result = productsCopy.filter(function (p) {
      const productName = p.name
      const productNameLower = productName.toLowerCase()
      return productNameLower.includes(searchText)
    })
    renderProducts(result)
  }
}

const navbarSearchForm = document.getElementById('navbar-search-form')
const navbarSearchInput = document.getElementById('navbar-search')

navbarSearchForm.onsubmit = function (event) {
  event.preventDefault()
  const text = navbarSearchInput.value
  searchProducts(text)
}
