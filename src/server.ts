import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'
import {router} from './routes'
import './database'

const app = express()
app.use(cors({
    origin: "localhost"
}))

app.use(express.json())
app.use(router)

//middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("Server running..."))