import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UsersRepositories } from "../repositories/UsersRepositories"

interface AuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService {
    
    async execute({email, password}: AuthenticateRequest){
       
        const usersRepositories = getCustomRepository(UsersRepositories)

        //verificar se email existe
        const userExists = await usersRepositories.findOne({
            email
        })

        if(!userExists){
            throw new Error("Email/password incorrect")
        }

        //verificar se senha está correta
        const passwordMatch = await compare(password, userExists.password)
        if(!passwordMatch){
            throw new Error("Email/password incorrect")
        }

        //gerar o token
        const token = sign(
            { email: userExists.email }, 
            "d3e4c38f76293bfd35cbe4567f1d2b7c",
            { subject: userExists.id, expiresIn: "1d" }
        )

        return token
    }
}

export { AuthenticateUserService }