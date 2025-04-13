import { Component } from '@angular/core';
import { ExpandableTableComponent } from '../../components/expandable-table/expandable-table.component';
interface Funcionario {
  nome: string;
  idade: number;
  raca: string;
  fiv: boolean;
  felv: boolean;
  pif: boolean;
  isolamento: boolean;
}
@Component({
  selector: 'app-felinos',
  standalone: true,
  imports: [ExpandableTableComponent],
  templateUrl: './felinos.component.html',
  styleUrl: './felinos.component.scss',
})
export class FelinosComponent {
  elementos: any[] = [
    {
      nome: 'Duda',
      idade: 9,
      raca: 'Sem raça',
      fiv: false,
      felv: false,
      pif: false,
      isolamento: false,
    },
    {
      nome: 'Bertingo',
      idade: 1,
      raca: 'Sem raça',
      fiv: false,
      felv: false,
      pif: false,
      isolamento: true,
    },
  ];

  onRowToggled(element: Funcionario | null): void {
    console.log('Linha expandida:', element);
  }
}
