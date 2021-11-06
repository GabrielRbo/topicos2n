import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";


//Vamos criar um tipo de dados
interface IRequest {

    name: string;
    quantity: number;
    price: number;


}


class CreateProductService {


// Método assincrono que recebe os dados do produto
    public async execute({name, quantity, price}: IRequest): Promise<Product> {        

        const productRepository = getCustomRepository(ProductRepository)
        const productExists = await productRepository.findByName(name)

        if (productExists) {

            throw new AppError("Já existe um produto cadastrado",400)
        }

        const product = productRepository.create({

            name,quantity,price

        })

        //Vamos salver no banco
        await productRepository.save(product)

        return product

    }

}

export default CreateProductService