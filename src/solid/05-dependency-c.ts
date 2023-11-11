import { Post } from "./05-dependency-b";

//You don't forget Dependency Inversion principle
//You don't forget Single Responsibility
export abstract class PostProviderWithAbstract {
  abstract getPosts(): Promise<Post[]>;
}

export interface PostProviderWithInterface {
   getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements PostProviderWithInterface {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    return [
      {
        userId: 1,
        id    : 1,
        title : "title 1 sql",
        body  : "body sql",
      },
      {
        userId: 1,
        id    : 2,
        title : "title 1 sql",
        body  : "body 2 sql",
      },
    ];
  }
}

export class JsonLocalDataBaseService implements PostProviderWithInterface {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    return [
      {
        userId: 1,
        id    : 1,
        title : "title json",
        body  : "body json",
      },
    ];
  }
}

export class WebApiDataBaseService implements PostProviderWithInterface {
  async getPosts(): Promise<Post[]> {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await resp.json();
  }
}
