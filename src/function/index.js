function addCart (cart, item) {
  let double = false
  let i = null
  cart.some(function (list, a) {
    if (list.id === item.id) {
      double = true
      i = a
    }
  })

  if (double) {
    cart[i].qty += 1
    cart[i].total = cart[i].qty * cart[i].price
  } else {
    let stateItem = item
    stateItem.qty = 1
    stateItem.total = item.price
    cart.unshift(stateItem)
  }
  saveCart(cart)
  return cart
}

function saveCart (item) {
  localStorage.setItem('cart', JSON.stringify(item))
}

function totalSum (item) {
  let sum = 0
  let sumQty = 0
  item.forEach(function (cart) {
    sum += parseInt(cart.total)
    sumQty += parseInt(cart.qty)
  })
  return { total: sum, qty: sumQty }
}

export { addCart, saveCart, totalSum }
