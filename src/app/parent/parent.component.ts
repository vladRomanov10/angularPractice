import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  //код для практики ngModel и читания свойства дочерным элементом от родительского
  inputValue: any

  //код для практики обработки событий из дочерного компонента в родительском
  clicks = 0
  onChanged (increased: boolean) {
    increased ? this.clicks++ : this.clicks--
  }

  //код для практики двусторонней привязки
  name = 'Tom'
}
