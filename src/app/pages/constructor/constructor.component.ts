import {Component, OnDestroy, OnInit} from '@angular/core';
import {CheckboxComponent} from '../../components/checkbox/checkbox.component';
import {TypesService} from '../../services/types-service/types.service';
import {ItemsService} from '../../services/items-service/items.service';
import {IType} from '../../interfaces/IType';
import {IItem} from '../../interfaces/IItem';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-constructor',
  imports: [
    CheckboxComponent,
  ],
  templateUrl: './constructor.component.html',
  styleUrl: './constructor.component.scss',
})
export class ConstructorComponent implements OnInit, OnDestroy {

  constructor(
    private readonly _typesService: TypesService,
    private readonly _itemsService: ItemsService,
  ) {}

  private _destroy$ = new Subject<void>();

  public typesData: IType[] = [];
  public itemsData: IItem[] = [];
  public activeTypeId: number | null = null;

  public itemsCount: number = 0;
  public sum: number = 0;

  ngOnInit() {
    this.loadTypes();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public onCheckboxChange(event: { item: IItem; checked: boolean }){
    if (event.checked) {
      this.sum += event.item.value;
      this.itemsCount += 1;
    } else {
      this.sum -= event.item.value;
      this.itemsCount -= 1;
    }
  }

  public resetCountAndSum() {
    this.sum = 0;
    this.itemsCount = 0;
  }

  public loadItems(id: number) {
    this.activeTypeId = id;
    this._itemsService.getItemsByType(id)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: data => {
          this.itemsData = data;
          this.resetCountAndSum();
        },
        error: err => {
          console.error(err);
        }
    })
  }

  private loadTypes() {
    this._typesService.getTypes()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: data => {
          this.typesData = data;
          if (data.length === 0) {
            return;
          }
          this.activeTypeId = data[0].id;
          this.loadItems(this.activeTypeId);
        },
        error: err => {
          console.error(err);
        }
    })
  }

}
