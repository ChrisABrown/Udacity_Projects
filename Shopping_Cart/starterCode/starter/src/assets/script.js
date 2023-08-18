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
    productId: productId,
    image: '../images/orange.jpg',
  },
  {
    name: 'Strawberries',
    price: 5,
    quantity: 0,
    productId: productId,
    image: '../images/strawberry.jpg',
  },
]

const cart = []
const addProductToCart = (productId) => {
  let item = products[productId]
  if (item in cart) {
    products[productId].quantity += 1
  } else {
    products[productId].quantity += 1
    cart.push(item)
  }
}

const increaseQuantity = (productId) => {
  let item = products[productId]
  item.quantity += 1
}

const decreaseQuantity = (productId) => {
  let item = products[productId]
  let index = item.findIndex()
  if (item.quantity === 0 && item in cart) {
    cart.splice(index, 1, item)
  } else if (item.quantity > 0) {
    item.quantity -= 1
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

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
