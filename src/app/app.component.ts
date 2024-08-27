import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";
import {UsersService} from "./services/users.service";
import {Observable} from "rxjs";
import {User} from "./types/interfaces/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  private readonly usersService = inject(UsersService)

  public users$:Observable<User[]> = this.usersService.getUsers()
  public filteredUsers!:User[]
  public averageUsersAge?:number

  ngOnInit() {
    this.getData()
  }

  getData ():void {
    this.users$.subscribe((data:User[]) => {
      this.filteredUsers = data
      this.averageUsersAge = this.averageAge()
    })
  }

  private averageAge():number {
    return this.filteredUsers?.reduce((sum:number, user:User, index:number):number => {
      if (index === this.filteredUsers?.length - 1) {
        return (sum + user.age) / this.filteredUsers.length
      }
      return sum + user.age
    }, 0)
  }
}
