// Class to fech the API
class API {
 
  //Function that gets all the products
  async allProducts() {
      const url = "http://localhost:3000/Products?_sort=name";
      const response = await (await fetch(url)).json();
      return response
  }


  //Function that gets one product by ID
  async singleProduct(id) {
    const url = `http://localhost:3000/Products/${id}`;
    const response = await (await fetch(url)).json();
    return response
}

  //Function that creates a new Product
  async createProduct(data) {
      const url = `http://localhost:3000/Products`;
      const response = await (await fetch(url, data));
      return response
  }

  //Function that updates a products
  async updateProduct(id,data) {
      console.log('heelelle')
      const url = `http://localhost:3000/Products/${id}`;
      const response = await (await fetch(url, data));
      return response
  }

  //Function that deletes a
  async deleteProduct(id, data) {
      const url = `http://localhost:3000/Products/${id}`;
      const response = await (await fetch(url, data));
      return response
  }

}




export default API;
