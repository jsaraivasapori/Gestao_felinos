import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BooleanIconPipe } from '../../pipes/boolean-icon/boolean-icon.pipe';

@Component({
  selector: 'app-expandable-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    BooleanIconPipe,
  ],
  templateUrl: './expandable-table.component.html',
  styleUrl: './expandable-table.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ExpandableTableComponent<T extends { [key: string]: any }> {
  // Inputs
  @Input() dataSource: T[] = [];
  @Input() columnsToDisplay: string[] = [];
  @Input() columnHeaders: { [key: string]: string } = {};

  // Outputs
  @Output() rowToggled = new EventEmitter<T | null>();

  // Template do conteúdo expandido
  @ContentChild('expandedRowContent') expandedRowContent!: TemplateRef<any>;

  // Controle de expansão
  expandedElement: T | null = null;

  get columnsToDisplayWithExpand(): string[] {
    return [...this.columnsToDisplay, 'expand'];
  }

  toggleRow(element: T): void {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.rowToggled.emit(this.expandedElement);
  }
  isBooleanColumn(value: any): boolean {
    return typeof value === 'boolean';
  }
}
