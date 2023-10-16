const inventory = [
    { title: 'Harry Potter', author: 'J.K. Rowling', price: 10.99, sold: false },
    { title: 'Lord of the Rings', author: 'J.R.R. Tolkien', price: 15.99, sold: true },
    { title: 'Dune', author: 'Frank Herbert', price: 12.99, sold: false }
  ];
  
function addBook(inventory, bookObj){
   const newItem = inventory.push(bookObj)
   return inventory
}  
  
const newObj = ({ title: 'Where The Sidewalk Ends', author: 'Shel Silverstien', price: 19.99, sold: true })
console.table(addBook(inventory, newObj))
