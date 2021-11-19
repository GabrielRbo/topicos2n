import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";
import userRouter from "../../../modules/users/routes/routes.user";
import sessionRouter from "../../../modules/users/routes/routes.session";



const routes = Router()

routes.use('/product', productRouter)

routes.use('/user', userRouter)

routes.use('/session', sessionRouter)

export default routes