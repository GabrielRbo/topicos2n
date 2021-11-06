import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Products";


@EntityRepository(Product)
class ProductRepository extends Repository<Product> {

    // Esta classe vai herdar todos os métodos de manipulação no banco de dados
    // personalizado para a classe Product


    // Vamos criar um método novo
    // procura por nome
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ // Procura pelo primeiro produto com nome
            where: {
                name
            }
        })
        return product
    }


}


export default ProductRepository