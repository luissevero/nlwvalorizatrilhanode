import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"

class ListTagsService {

    async execute(){

        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tags = await tagsRepositories.find()

        /** colocar um hashtag na frente de cada nome de tag **
        tags = tags.map( (tag) => ({...tag, nameCustom: `#${tag.name}`}))
        return tags
        */

        //ou com a classe classToPlain
        return classToPlain(tags)
    }
}

export { ListTagsService }