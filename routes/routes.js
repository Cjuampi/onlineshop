const router = require('express').Router();
const apiProducts = require("../controllers/apiProduct.controllers")

//Rutas de inicio
router.get("/",apiProducts.home)
router.get("/api",apiProducts.home)
router.get("/api/products",apiProducts.home)
router.get("/api/producers",apiProducts.getProducers)
/* router.post("/api/products", apiProducts.searchProduct) */
router.get("/api/products/:word", apiProducts.searchProduct)
router.get("/api/product/:id", apiProducts.getProduct)
module.exports = router;