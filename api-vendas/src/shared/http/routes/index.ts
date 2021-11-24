import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";
import userRouter from "../../../modules/users/routes/routes.user";
import sessionRouter from "../../../modules/users/routes/routes.session";
import automobileRouter from "../../../modules/automobiles/routes/routes.automobile";



const routes = Router()

routes.use('/product', productRouter)

routes.use('/user', userRouter)

routes.use('/session', sessionRouter)

routes.use("/automobile", automobileRouter)

export default routes