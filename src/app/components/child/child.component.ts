import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
 @Input () myVar:object= {}

  checkValue () {
    console.log(this.myVar)
  }

  changeMyVar () {
   
  }
}
