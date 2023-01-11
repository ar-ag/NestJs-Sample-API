import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {

    createCat(cat): string {
      return `New Cat added, name:${cat.name}, age:${cat.age}, breed:${cat.breed}!`;
    }
    getCatHello(): string {
        return 'Hello says the cat!';
      }
    
      getKittenHello(id): string {
        return `Hello says the #${id} kitten!`;
      }
}