import fetcher from "./fetcher"

export const auth = (mode: 'signin' | 'signup', body : {email : string, password : string, firstName? :string, lastName?: string}) => {
    return fetcher(`/${mode}`, body)
}

export const post = (body : {description : string, selectedCoin : string, priceWhenSelected :number, image : string}) => {
    return fetcher('/posts/addpost', body)


}

