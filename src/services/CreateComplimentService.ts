import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface ComplimentRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}){
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories)

        //verificar se o user receiver e o user sender não são o mesmo user!
        if(user_sender === user_receiver){
            throw new Error("User Sender does not submit to himself!")
        }

        //verifica se existe o user receiver
        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if(!userReceiverExists){
            throw new Error("User receiver does not exists!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment)

    }
}

export { CreateComplimentService}