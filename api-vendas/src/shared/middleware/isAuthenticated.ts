import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";


export default function isAuthenticated(req: Request, res: Response, next: NextFunction): void {

    // recuperar o token informado pelo usuário
    let authHeaders = req.headers.authorization

    if(!authHeaders){// Front End não informou o token

        throw new AppError("Token não está presente", 400)
    
    }
    // Frontend informou o token 
    let [, token] = authHeaders.split(' ')
    // Verifica se o token é valido 
    try {
        // Devemos utilizar a chave secreta é privada
        let tokenVericiado = verify(token, 'chavesecreta123')


        return next()// Passa pra frente, entra na rota
    }
    catch {
        throw new AppError("Token inválido", 400)


    }



}
