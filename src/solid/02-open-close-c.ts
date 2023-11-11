import axios from 'axios';


//The class is open to extensions and close the modifiers
//It is open to extensions because the url is a parameter
//It is close to modifiers because the method get is parametrized
export class HttpClient{
    
    // async get(url:string) {
    //     const { data } = await axios.get(url);
    //     return {data};
    // }

    async get(url:string){
        const resp = await fetch(url);
        const data = await resp.json();
        return {data}
    }
}