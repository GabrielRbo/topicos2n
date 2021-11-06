import 'reflect-metadata'
import 'express-async-errors'

// Servidor HTTP
import express, { NextFunction, Request, Response } from "express";
import routes from './routes'



// Cors - Permissão de acesso para rotas
import cors from "cors";

// Criar a conexão com o banco de dados
import './../typeorm'
import AppError from "../errors/AppError";

// Criando o Servidor
const servidor = express();

// Servidor vai utilizar o cors
servidor.use(cors());

// Servidor vai converter valroes do usuário para JSON
servidor.use(express.json());

servidor.use(routes)

servidor.use(
    (error: Error, req: Request, res: Response, next: NextFunction) => {
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }

        //Erro não foi lançado pelo AppError
        return res.status(500).json({
            status: 'error',
            message: "Erro interno do servidor"
        })
    }
)

// Subir o servidor
servidor.listen(3333, () => {

    console.log("Servidor Rodando");
    
})





