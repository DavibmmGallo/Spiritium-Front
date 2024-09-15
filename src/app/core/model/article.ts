export interface Article{
    _id: string
    title: string
    author: string
    description: string
    release_date: Date
    text: {
        content: string | boolean
        type: string
    }[]
}