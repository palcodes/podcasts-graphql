import { Podcast } from './models/podcast'

export const resolvers = {
    Query: {
        getPodcasts: async () => await Podcast.find() 
    },
    Mutation: {
        createPod: async (_, {name, description, episodes}) => {
            const newPod = new Podcast({name, description, episodes})
            await newPod.save()
            return newPod
        }
    }
}