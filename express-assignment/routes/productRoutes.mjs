import { Router } from "express";
import { query, validationResult, body, matchedData} from "express-validator";
import {products} from "../utils/constants.mjs";
import { getProductById, getProducts, addProduct, updateProductById,deleteProductById } from "../controllers/productController.mjs";
//This file helps manage different API endpoints efficiently.
//It allows you to define routes separately and then mount them in the main application file, making your code modular, reusable, and maintainable.

const router = Router();

router.get("/api/products",getProducts);

router.get("/api/products/:id",getProductById);

router.post("/api/products",addProduct);

//used to update the entire item
router.put("/api/products/:id",updateProductById);

router.delete("/api/produts/:id",deleteProductById);

export default router