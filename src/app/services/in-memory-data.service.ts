import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {User} from "../types/interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const users:User[] = [
      {gender: 'male', age: 22},
      {gender: 'female', age: 8},
      {gender: 'male', age: 13},
      {gender: 'female', age: 18},
      {gender: 'male', age: 45},
      {gender: 'male', age: 16},
      {gender: 'female', age: 51}
    ]
    return {users}
  }
}
