import { Request, Response } from "express"
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";



export default class ProductController {

    // Vai chamar o ListProductSerivce
    public async index(req: Request, res: Response): Promise<Response> {

        const listProduct = new ListProductService()
        const products = await listProduct.execute()
        

        return res.json(products)

    }

    // Inicar ShowProductSerivce

    public async show(req: Request, res: Response): Promise<Response>{

        // Recuperar o ID do produto
        const {id} = req.params
        const ShowProduct = new ShowProductService()

        const product = await ShowProduct.execute(id)

        return res.json(product)
    }

    public async create(req: Request, res: Response): Promise<Response>{

        const {name, quantity, price} = req.body

        const createProduct = new CreateProductService()

        const product = await createProduct.execute({name, quantity, price})

        return res.json(product)

    }

    public async update(req: Request, res: Response): Promise<Response>{

        const {id} = req.params

        const {name, quantity, price} = req.body

        const updateProdcut = new UpdateProductService()
        const product = await updateProdcut.execute({id, name, quantity, price})

        return res.json(product)
    }

    public async delete(req: Request, res: Response):Promise<Response>{

        const {id} = req.params

        const deleteProduct = new DeleteProductService()

        await deleteProduct.execute(id)

        return res.json([])

    }

}