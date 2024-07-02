import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

}
