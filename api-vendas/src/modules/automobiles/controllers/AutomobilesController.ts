import { Request, Response } from "express"
import CreateAutomobileService from "../services/CreateAutomobileService"
import DeleteAutomobileService from "../services/DeleteAutomobileService"
import ListAutomobileService from "../services/ListAutomobileService"
import ShowAutomobileService from "../services/ShowAutomobileService"
import UpdateProductService from "../services/UpdateAutomobileService"


export default class AutomobileController {

    // Vai chamar o ListProductSerivce
    public async index(req: Request, res: Response): Promise<Response> {

        const listAutomobile = new ListAutomobileService()
        const automobiles = await listAutomobile.execute()

      

        return res.json(automobiles)

    }

    // Inicar ShowProductSerivce

    public async show(req: Request, res: Response): Promise<Response>{

        // Recuperar o ID do produto
        const {id} = req.params
        const showAutomobile = new ShowAutomobileService()

        const automobile = await showAutomobile.execute(id)

        return res.json(automobile)
    }

    public async create(req: Request, res: Response): Promise<Response>{

        const {ano, marca, modelo} = req.body

        const createAutomobile = new CreateAutomobileService()

        const automobile = await createAutomobile.execute({ano, marca, modelo})

        return res.json(automobile)

        

    }

    public async update(req: Request, res: Response): Promise<Response>{

        const {id} = req.params

        const {ano, marca, modelo} = req.body

        const updateAutomobile = new UpdateProductService()
        const automobile = await updateAutomobile.execute({id, ano, marca, modelo})

        return res.json(automobile)
    }

    public async delete(req: Request, res: Response):Promise<Response>{

        const {id} = req.params

        const deleteAutomobile = new DeleteAutomobileService()

        await deleteAutomobile.execute(id)

        return res.json([])

    }

}
