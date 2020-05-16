import mongoose from 'mongoose'

export const Podcast = mongoose.model('Podcast', 
{
    name: String,
    description: String,
    episodes: String
});