import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";



const routes = Router()

routes.use('/product', productRouter)



export default routes