import API from "./Components/products.js";

//Get product by ID
const url = window.location.href
const param = url.split('?')
const id = param[1]
const api = new API();


api.singleProduct(id)
.then(data => {
  renderProduct(data)
})

const renderProduct = ({ id, name, description, warranty, quantity, status, price }) => {
  const html = 
      `
      <label>Name</label>
            <input type="text" id="edit-name" placeholder="type product name" value=${name}>
            <label>Description</label>
            <input type="text" id="edit-description" placeholder="type product description" value=${description}>
            <label>Warranty</label>
            <input type="text" id="edit-warranty" placeholder="type product warranty time" value=${warranty}>
            <label>Quantity</label>
            <input type="number" id="edit-quantity" placeholder="type product quantity" value=${quantity}>
            <label>Status</label>
            <select type="text" id="edit-status" placeholder="type product status">
              <option value=${status}>${status}</option>
              <option value="PUBLISHED">PUBLISHED</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
            <label>Price</label>
            <input type="number" id="edit-price" placeholder="type product price" value=${price}>
            <input class="updateButton" type="submit" name="submit" value="Edit">
  `
  document.querySelector('.edit-fields').innerHTML = html;

  document.querySelector(".updateButton").addEventListener('click', e => {
    e.preventDefault()
    name = document.querySelector('#edit-name').value,
    description = document.querySelector('#edit-description').value,
    warranty = document.querySelector('#edit-warranty').value,
    quantity = document.querySelector('#edit-quantity').value,
    status = document.querySelector('#edit-status').value,
    price = document.querySelector('#edit-price').value;

    const updateProduct = {
      'name' : name,
      'description': description,
      'warranty':warranty,
      'quantity': quantity,
      'status' : status,
      'price' : price,
    }

    const data = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateProduct),
  
    }

    api.updateProduct(id, data)
    .then(data => {
      console.log('Succesfully updated')
    })




  })
  

  
}




/*


//Function that updates  a Product
document.querySelector(".editButton").addEventListener('click', e => {
    e.preventDefault()
    name = document.querySelector('#edit_name').value,
    description = document.querySelector('#edit_description').value,
    warranty = document.querySelector('#edit_warranty').value,
    quantity = document.querySelector('#edit_quantity').value,
    status = document.querySelector('#edit_status').value,
    price = document.querySelector('#edit_price').value;
  
    const updateProduct = {
      'name' : name,
      'description': description,
      'warranty':warranty,
      'quantity': quantity,
      'status' : status,
      'price' : price,
    }
  
  
    localStorage.setItem(name, JSON.stringify(updateProduct));
    const data = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateProduct),
  
    } */
  
  
    //Post new product
  
    