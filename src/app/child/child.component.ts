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

  // код для практики четния свойства из родительского коспонента
  @Input() item:any

  // код для практики обработки событий из дочерного компонента в родительском
  @Output() onChange = new EventEmitter()

  change(increased:boolean) {
    this.onChange.emit(increased)
  }

  //код для практики двухсторонней привзяки
  @Input() userName:any =''
  @Output() userNameChange = new EventEmitter()

  onNameChange(model: any) {
    this.userName = model
    this.userNameChange.emit(model)
  }
}
