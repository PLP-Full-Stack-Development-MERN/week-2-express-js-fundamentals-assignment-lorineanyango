import { products } from "../utils/constants.mjs";

//geting all products
export const getProducts = (req, res)=>{
  console.log(req.query)
    const filter = req.query.filter;
    const value = req.query.value;
  
    if(filter && value){
      return response.send(products.filter((product)=> product[filter].includes(value))
    )
    }
    res.send(products);
}


//geting product by id
export const getProductById = (req, res)=>{
  const productId = parseInt(req.params.id)// we are converting the id to int becz its in string
  if(isNaN(productId)){
    return res.status(400).send("Bad Request! invalid id");
  }
  const findProduct = products.find((product)=>product.id === productId);
  if(!findProduct) {
    return res.sendStatus(404);
  }
  return res.send(findProduct)
}


//add a product
export const addProduct=(req, res)=>{
  const body = req.body;
  const newProduct = {id: products.length + 1, ...body};
  products.push(newProduct);
  return res.status(201).send(newProduct);
}


//updating a product 
export const updateProductById = (req, res)=>{
  const productId = parseInt(req.params.id);
  const body = req.body;
  if(isNaN(productId)){
    return res.status(400).send("Bad Request! invalid ID");
  }
  var findProduct = products.find((product)=>product.id === productId);
  if(!findProduct){
    return res.sendStatus(404);
  }
  findProduct = {id: productId, ...body};
  return res.status(200).send(findProduct);
}


//deleting a product
export const deleteProductById = (req, res)=>{
  const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        return res.status(400).send("Bad Request! Invalid ID");
    }
    const productIndex = products.findIndex(product => product.id === productId);
    
    if (productIndex === -1) {
        return res.sendStatus(404); // User not found
    }
    products.splice(productIndex, 1);
    return res.sendStatus(200);
}