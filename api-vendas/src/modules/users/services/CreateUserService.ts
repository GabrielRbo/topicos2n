
import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repository/UserRepository"
// Criar um tipo de dado

interface IRequest {
    name: string
    email: string
    password: string


}

class CreateUserService {

        public async execute({name, email, password}: IRequest): Promise<User> {

            let userRepository = getCustomRepository(UserRepository)
            
            const emailExist = await userRepository.findByEmail(email)

            if(emailExist){

                throw new AppError('Email Já Cadastrado!', 400)

            }

            // Email Não Existe
            // Senha do usuário precisa ser criptografa para a inserção no banco de dados
            let passCrypto = await hash(password, 8)

            let novoUsuario = userRepository.create({
                name,
                email,
                password: passCrypto
            })


            await userRepository.save(novoUsuario)

            return novoUsuario
        }

}

export default CreateUserService