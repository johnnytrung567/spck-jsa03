function formatCurrency(number) {
  const formater = new Intl.NumberFormat('vi-VN')
  const result = formater.format(number)
  return result + 'đ'
}

export default formatCurrency
