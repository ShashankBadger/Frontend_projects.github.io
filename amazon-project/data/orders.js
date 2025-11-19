export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addorder(order) {
  orders.unshift(order);
  saveToStorage();
  console.log(orders);
}

console.log(orders);

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}