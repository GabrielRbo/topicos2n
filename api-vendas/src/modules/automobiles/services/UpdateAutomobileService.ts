import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobiles";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";


interface IRequest {

    id: string;
    ano: number;
    marca: string;
    modelo: string;


}

class UpdateProductService {


    public async execute({id, ano, marca, modelo}: IRequest): Promise<Automobile> {

        const automobileRepository = getCustomRepository(AutomobileRepository)
        const automobileExist = await automobileRepository.findOne(id)

        if(!automobileExist){
            throw new AppError("Veiculo não existe", 400)

        }

        // Produto existe
        const automobileModelo = await automobileRepository.findByName(modelo)

        if(automobileModelo){
            throw new AppError("Já exsite produto com este nome", 400)

        }

        // Podemos atualizar
        automobileExist.ano = ano;
        automobileExist.marca = marca
        automobileExist.modelo = modelo

        await automobileRepository.save(automobileExist) // Atualiza pois productExist tem id

        return automobileExist
    }

}

export default UpdateProductService