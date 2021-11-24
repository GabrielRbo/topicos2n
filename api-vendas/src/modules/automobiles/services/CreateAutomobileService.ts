import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobiles";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";


//Vamos criar um tipo de dados
interface IRequest {

    ano: number;
    modelo: string;
    marca: string;


}


class CreateAutomobileService {


// Método assincrono que recebe os dados do produto
    public async execute({ano, modelo, marca}: IRequest): Promise<Automobile> {   

    
        const automobileRepository = getCustomRepository(AutomobileRepository)

        
        const automobileExists = await automobileRepository.findByName(modelo)

        console.log("Passou");


        if (automobileExists) {

            throw new AppError("Já existe esse modelo cadastrado",400)
        }

        const automobile = automobileRepository.create({

            ano,modelo,marca

        })

        //Vamos salver no banco
        await automobileRepository.save(automobile)

        return automobile

    }

}

export default CreateAutomobileService