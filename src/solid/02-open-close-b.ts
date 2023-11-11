import { HttpClient } from "./02-open-close-c";

//The class complies with Single Responsibilities
//The class complies with Open extension and close modification
//The class complies with pattern composition
export class TodoService {     
    public url:string='https://jsonplaceholder.typicode.com/todos/';

    constructor(private http:HttpClient){}

    async getTodoItems() {
        const { data } = await this.http.get(this.url);
        return data;
    }
}


export class PostService {
    constructor(private http:HttpClient){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    constructor(private http:HttpClient){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
}