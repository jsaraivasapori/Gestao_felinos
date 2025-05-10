import { Component } from '@angular/core';
import { ExpandableTableComponent } from '../../components/expandable-table/expandable-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { MatCardModule } from '@angular/material/card';
import { BooleanIconPipe } from '../../pipes/boolean-icon/boolean-icon.pipe';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
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
    private sharedService: SharedService
  ) {}
  showTable: boolean = true;

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
        'lsmakmsakls sasjalks alsklasçlask asmlalsças a ssajskajslkajslkasasçamsçasmçl,ç snasjkajsaksjasjm askjaskasajv',
    },
  ];
  /**
   * Método getter para saber qual rota está.
   *
   *
   *
   *
   */
  get isFormRoute(): boolean {
    return this.router.url === '/home/felinos/form';
  }

  toEdit(data: any): void {
    console.log(data);
    this.showTable = false;
    this.sharedService.setData('currentFeline', data);
    this.router.navigate(['form'], { relativeTo: this.route });
  }

  addNewFeline(): void {
    this.sharedService.clearData('currentFeline');
    this.router.navigate(['form'], { relativeTo: this.route });
  }
}
