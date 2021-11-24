import { EntityRepository, Repository } from "typeorm";
import Automobile from "../entities/Automobiles";



@EntityRepository(Automobile)
class AutomobileRepository extends Repository<Automobile> {

    // Esta classe vai herdar todos os métodos de manipulação no banco de dados
    // personalizado para a classe Product


    // Vamos criar um método novo
    // procura por nome
    public async findByName(modelo: string): Promise<Automobile | undefined> {
        let automobile = this.findOne({ // Procura pelo primeiro produto com nome
            where: {
                modelo
            }
        })
        return automobile
    }


}


export default AutomobileRepository