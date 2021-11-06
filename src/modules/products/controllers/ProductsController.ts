import { Request, Response } from "express"
import { ServerResponse } from "http";
import ListProductService from "../services/ListProductService";


export default class ProductController {

    // Vai chamar o ListProductSerivce
    public async index(req: Request, res: Response): Promise<Response> {

        const listProduct = new ListProductService()
        const products = await listProduct.execute()
        

        return res.json(products)

    }

}