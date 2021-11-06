import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/AppError";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";



class DeleteProductService {

    public async execute(id: string): Promise<void>{
        //Não podemos remover um produto que não exista

        const productRepository = getCustomRepository(ProductRepository)
    
        const productExist = await productRepository.findOne(id)

        if (!productExist) {
            throw new AppError("Produto não existe", 400)
        }

        // Podemos remover
        await productRepository.remove(productExist)

    }
}

export default DeleteProductService