/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let productId = Math.floor(Math.random() * (9999 - 1)) + 1

const products = [
  {
    name: 'Cherries',
    price: 5,
    quantity: 0,
    productId: productId,
    image: '../images/cherry.jpg',
  },
  {
    name: 'Oranges',
    price: 5,
    quantity: 0,
    productId: productId + 1,
    image: '../images/orange.jpg',
  },
  {
    name: 'Strawberries',
    price: 5,
    quantity: 0,
    productId: productId + 2,
    image: '../images/strawberry.jpg',
  },
]

const cart = []
const getProduct = (productId) => {
  for (let i = 0; i < products.length; i++) {
    let item = products[i]
    if (item.productId === productId) return item
  }
}

const addProductToCart = (productId) => {
  let item = getProduct(productId)
  if (cart.includes(item)) {
    item.quantity += 1
  } else {
    cart.push(item)
    item.quantity += 1
  }
}

const removeProductFromCart = (productId) => {
  let item = getProduct(productId)
  let index = cart.indexOf(item)
  if (cart.includes(item)) {
    item.quantity = 0
    cart.splice(index, 1)
  }
}

const increaseQuantity = (productId) => {
  let item = getProduct(productId)
  item.quantity += 1
}

const decreaseQuantity = (productId) => {
  let item = getProduct(productId)
  let index = cart.indexOf(item)
  if (item.quantity < 1) {
    cart.splice(index, 1)
  } else if (item.quantity === 1) {
    item.quantity -= 1
    cart.splice(index, 1)
  } else if (item.quantity > 1 && cart.includes(item)) {
    item.quantity -= 1
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity
  }
  return total
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let balance
const pay = (amount) => {
  let total = parseInt(cartTotal(), 10)
  balance = Number(amount - total)
  switch (balance) {
    case balance < 0:
      balance += amount
      console.log(balance)
      return balance
    case balance > 0:
    default:
      return balance
  }
}

/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = () => {
  cart.splice(0, cart.length)
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
