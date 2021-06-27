import {Request, Response, NextFunction} from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    
    //verificar se usuário é admin
    const { user_id } = req
    const usersRepositories = getCustomRepository(UsersRepositories)
    const user = await usersRepositories.findOne(user_id)
    if(user.admin){
        return next()
    }
    
    return res.status(401).json({
        error: "Unauthorized",
    })
    
}