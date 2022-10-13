// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = price * quantity;
  return price * quantity;
  //console.log(price, quantity);
  //console.log(subtotal.innerText);
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test
  // ITERATION 2
  let total = 0;
  let totalValue = document.querySelector('#total-value span');
  //... your code goes here
  const allProducts = document
    .querySelectorAll('.product')
    .forEach((product) => {
      total += updateSubtotal(product);
    });

  // ITERATION 3
  //... your code goes here

  console.log(totalValue);
  totalValue.innerText = total;
  // allValues.innerText.forEach((value) => (totalValue += value));

  /*const allValues = document
    .querySelectorAll(this.subtotal.innerHTML)
    .forEach((value) => (totalValue += value));
  console.log(document.querySelectorAll('.subtotal span').innerText);*/
  //console.log(this.subtotal.innerText);
  //const calculateValues = console.log(totalValue);
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelectorAll;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document
    .querySelectorAll('.btn.btn-remove')
    .forEach((button) => {
      button.addEventListener('click', removeProduct);
    });

  //... your code goes here
});
