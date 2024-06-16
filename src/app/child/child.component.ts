import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
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
}
