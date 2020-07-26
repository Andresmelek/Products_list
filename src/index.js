import API from "./Components/products.js";



const api = new API();


//Function to display all the products
api.allProducts()
.then(data => {
 const html = data.map(({ id, name, description, warranty, quantity, status, price, createdAt }) => {
   return  `
   <div class="card">
    <div class="product-item">
      <h1>Details</h1>
      <hr>
          <div class="name" ><b>Name:</b> ${name}</div>
          <div class="description"><b>Description:</b> ${description}</div>
          <div class="warranty"><b>Warranty:</b> ${warranty}</div>
          <div class="quantity"><b>Quantity:</b> ${quantity}</div>
          <div class="status"><b>Status:</b> ${status}</div>
          <div class="price"><b>Price:</b> ${price}</div>
          <div class="created"><b>Created at:</b> ${createdAt}</div>
       <div class="buttons">
          <Button class="edit" onclick="window.location.href='edit.html?${id}';"> Edit</Button>
          <Button class="delete"> Delete</Button>
       </div>
   </div>
   
   </div>
 `
 }).join('')
 document.querySelector(".product-list").innerHTML = html;



//Function that deletes a single product
let elements = document.querySelectorAll('.delete');
elements.forEach((element, index) => {
  element.addEventListener('click', e => {
    e.preventDefault()
    const answer = window.confirm(`Are you sure you want to delete the ${data[index].name} product?`);
    if(answer) {
      api.deleteProduct(data[index].id, {method:'delete'} )
      location.reload(true)
    .then(data => {
      console.log('Succesfully deleted')
    })
  }
  })
  
});

})


//Function to create a new Product
document.querySelector(".saveButton").addEventListener('click', e => {
  e.preventDefault()
  const id = Math.random().toString(36).substr(2, 9),
  name = document.querySelector('#name').value,
  description = document.querySelector('#description').value,
  warranty = document.querySelector('#warranty').value,
  quantity = document.querySelector('#quantity').value,
  status = document.querySelector('#status').value,
  price = document.querySelector('#price').value,
  createdAt = new Date();

  const newProduct = {
    'id' :id,
    'name' : name,
    'description': description,
    'warranty':warranty,
    'quantity': quantity,
    'status' : status,
    'price' : price,
    'createdAt':createdAt,
  }


  //localStorage.setItem(name, JSON.stringify(newProduct));
  const data = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct),

  }

  //Post new product
 api.createProduct(data)
  .then(data => {
    console.log('Succesfully created')
    location.reload(true)
  })
  
})
