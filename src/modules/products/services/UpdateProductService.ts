import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {

    id: string;
    name: string;
    quantity: number;
    price: number;


}

class UpdateProductService {


    public async execute({id, name, quantity, price}: IRequest): Promise<Product> {

        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findOne(id)

        if(!productExist){
            throw new AppError("Produto não existe", 400)

        }

        // Produto existe
        const productName = await productRepository.findByName(name)

        if(productName){
            throw new AppError("Já exsite produto com este nome", 400)

        }

        // Podemos atualizar
        productExist.name = name;
        productExist.quantity = quantity
        productExist.price = price

        await productRepository.save(productExist) // Atualiza pois productExist tem id

        return productExist
    }

}

export default UpdateProductService