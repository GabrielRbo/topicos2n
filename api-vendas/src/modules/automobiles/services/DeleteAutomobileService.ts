import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobiles";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

class DeleteAutomobileService {

    public async execute(id: string): Promise<void>{
        //Não podemos remover um produto que não exista

        const automobileRepository = getCustomRepository(AutomobileRepository)
    
        const automobileExist = await automobileRepository.findOne(id)

        if (!automobileExist) {
            throw new AppError("Produto não existe", 400)
        }

        // Podemos remover
        await automobileRepository.remove(automobileExist)

    }
}

export default DeleteAutomobileService