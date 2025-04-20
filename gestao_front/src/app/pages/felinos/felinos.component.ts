import { Component } from '@angular/core';
import { ExpandableTableComponent } from '../../components/expandable-table/expandable-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { MatCardModule } from '@angular/material/card';
import { BooleanIconPipe } from '../../pipes/boolean-icon/boolean-icon.pipe';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
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
  imports: [
    ExpandableTableComponent,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    BooleanIconPipe,
    RouterOutlet,
  ],
  templateUrl: './felinos.component.html',
  styleUrl: './felinos.component.scss',
})
export class FelinosComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shared: SharedService
  ) {}

  isCreating: boolean = true;
  elementos: any[] = [
    {
      id: 1,
      nome: 'Duda',
      idade: 9,
      raca: 'sem raca',
      dataResgate: '20/08/2016',
      fiv: false,
      felv: false,
      pif: false,
      isolamento: true,
      observacao:
        'lsmakmsakls sasjalks alsklasçlask assdddddd ddddddd ddddddd dddddddd ddddddddddddd ddddddddddd  ddddddddddddddd ddddddddd  dddddd ddddddmlalsças a ssajskajslkajslkasasçamsçasmçl,ç snasjkajsaksjasjm askjaskasaks',
    },
    {
      id: 2,
      nome: 'Bertingo',
      idade: 1,
      raca: 'Sem raça',
      dataResgate: '20/08/2016',
      fiv: false,
      felv: false,
      pif: false,
      isolamento: true,
      observacao:
        'lsmakmsakls sasjalks alsklasçlask asmlalsças a ssajskajslkajslkasasçamsçasmçl,ç snasjkajsaksjasjm askjaskasaks',
    },
  ];

  onRowToggled(element: Funcionario | null): void {
    console.log('Linha expandida:', element);
  }

  toEdit(data: any): void {
    console.log(data);
    this.isCreating = false;
    this.shared.setData('felinoToUpdate', data);
    this.router.navigate(['form'], { relativeTo: this.route });
  }
}
