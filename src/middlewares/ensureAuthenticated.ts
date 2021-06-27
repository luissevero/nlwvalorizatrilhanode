import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function ensureAuthenticated (req: Request, res: Response, next: NextFunction){

    //receber o token
    const authToken = req.headers.authorization

    //validar se token está preenchido
    if(!authToken){
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    //verificar se token é válido
    try {

        //recuperar informações do usuário
        const { sub } = verify(token, 'd3e4c38f76293bfd35cbe4567f1d2b7c') as Payload
        req.user_id = sub

    }catch(err){
        return res.status(401).end()
    }    

    return next()
}