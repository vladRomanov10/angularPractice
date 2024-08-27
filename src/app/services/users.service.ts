import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../types/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    http = inject(HttpClient)

    private readonly usersUrl = 'api/users'

    getUsers():Observable<User[]> {
        return  this.http.get<User[]>(this.usersUrl)
            .pipe(
                map((users:User[]) => users.filter(user => user.gender === 'female'))
            )
    }
}