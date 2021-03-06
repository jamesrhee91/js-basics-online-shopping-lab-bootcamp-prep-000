var cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var list = {}
  list[item] = Math.floor(Math.random() * 100)
  cart.push(list)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function itemsOnly(obj) {
  return Object.keys(obj)
}

function viewCart() {
  var temp = ""
  if (cart.length === 0)
    {console.log("Your shopping cart is empty.")}
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length-1)
      {temp += ` ${itemsOnly(cart[i])} at $${cart[i][itemsOnly(cart[i])]}.`}
    else
      {temp += ` ${itemsOnly(cart[i])} at $${cart[i][itemsOnly(cart[i])]},`}
  }
  console.log(`In your cart, you have${temp}`)
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      var newcart = cart.splice(i, 1)
      return newcart
    }
  }
  {console.log("That item is not in your cart.")}
}

function placeOrder(num) {
  if (num === undefined)
    {console.log("We don't have a credit card on file for you to place your order.")}
  else
    {console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)}
  return cart = []
}
