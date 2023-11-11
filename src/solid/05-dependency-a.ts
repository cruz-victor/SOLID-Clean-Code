import { PostService } from './05-dependency-b';
import { JsonLocalDataBaseService, LocalDataBaseService, WebApiDataBaseService } from './05-dependency-c';


// Main
(async () => {

    //const postProvider=new LocalDataBaseService();
    //const postProvider=new JsonLocalDataBaseService();
    const postProvider=new WebApiDataBaseService();

    //You don't forget Composition concept (Open and Close)
    //You don't forget Inject Dependency concept (Dependency Inverse)
    //You don't forget Polymorphic concept (Liskov)
    //You don't forget Single Responsibility (Single Responsibility)
    const postService = new PostService(postProvider);

    const posts = await postService.getPosts();

    console.log({ posts })
})();