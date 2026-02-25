import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IItem} from '../../interfaces/IItem';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  @Input() item!: IItem;
  @Output() checkboxChanged = new EventEmitter<{
    item: IItem;
    checked: boolean;
  }>();

  public onChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.checkboxChanged.emit({
      item: this.item,
      checked: checked
    });
  }

}
