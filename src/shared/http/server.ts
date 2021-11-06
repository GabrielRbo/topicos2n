// Servidor HTTP
import express, { Express } from "express";

// Cors - Permissão de acesso para rotas
import cors from "cors";


// Criando o Servidor
const servidor = express();

// Servidor vai utilizar o cors
servidor.use(cors);

// Servidor vai converter valroes do usuário para JSON
servidor.use(express.json());


// Subir o servidor
servidor.listen(3333, () => {

    console.log("Servidor Rodando");
    
})




