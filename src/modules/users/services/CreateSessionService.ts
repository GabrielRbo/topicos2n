import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";



interface IRequest { // Um tipo de dado para a requisição
    email: string
    password: string
}

interface IResponse { // Um tipo de dados para a resposta

    user: User
    token: string

}


class CreateSessionService {

    public async execute({ email, password }: IRequest): Promise<IResponse> {

        const userRepository = getCustomRepository(UserRepository)

        // Verifica se o usuário existe
        const user = await userRepository.findByEmail(email)

        if (!user) {

            throw new AppError('Usuário/ Senha Inválidos', 400)

        }

        //Usuário existe
        //Senha está correta ? bcryptjs
        const senhaConfirmada = await compare(password, user.password)

        if (!senhaConfirmada) {

            throw new AppError("Usuário/ Senha Inválidos", 400)

        }
        //Senha Correta
        const token = sign({}, 'chavesecreta123', {

            subject: user.id,
            expiresIn: '1d'

        })

        return {
            // Retornnando o usuário e um token para acesso
            user,
            token
        
        }

    }

}

export default CreateSessionService