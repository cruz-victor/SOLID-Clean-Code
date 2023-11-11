import { PostProviderWithAbstract, PostProviderWithInterface } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];    

    //You don't forget Open and Close principles
    constructor(private postProvider:PostProviderWithInterface) {
    }

    async getPosts() {        
        this.posts = await this.postProvider.getPosts(); 

        return this.posts;
    }
}
