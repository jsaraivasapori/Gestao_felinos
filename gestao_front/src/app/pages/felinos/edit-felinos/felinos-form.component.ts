import { Component, Input } from '@angular/core';
import { DynamicFormComponent } from '../../../components/dynamic-from/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FormField } from '../../../models/form-field';
import { SharedService } from '../../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-felinos-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './felinos-form.component.html',
  styleUrl: './felinos-form.component.scss',
})
export class FelinosFormComponent {
  @Input() data: any;

  // Configuração dos campos do formulário
  formConfig: FormField[] = [
    {
      name: 'nome',
      label: 'Felino ',
      type: 'text',
      validators: [Validators.required],
      errorMessages: { required: 'Este campo é obrigatório.' },
    },
    {
      name: 'idade',
      label: 'Idade em anos',
      type: 'number',
      validators: [Validators.required],
      errorMessages: {
        required: 'Idade é obigatória',
      },
    },
    {
      name: 'raca',
      label: 'Raça',
      type: 'select',
      validators: [Validators.required],
      errorMessages: { required: 'Selecione uma categoria.' },
      options: [
        { value: 'sem raca', label: 'Sem Raça' },
        { value: 'siames', label: 'Siamês' },
        { value: 'persa', label: 'Persa' },
      ],
    },
    {
      name: 'dataResgate',
      label: 'Data de Resgate',
      type: 'dateMasked', //
      validators: [Validators.required],
      errorMessages: { required: 'Data de resgate  é obrigatória.' },
    },
    {
      name: 'observacao',
      label: 'Observação',
      type: 'textarea', // define como textarea
      validators: [Validators.required],
      errorMessages: { required: 'O campo Observação é obrigatório.' },
    },
    // Os campos do tipo slide-toggle ficarão agrupados no DynamicForm
    {
      name: 'isolamento',
      label: 'Isolamento',
      type: 'slide-toggle',
      value: false,
    },
    {
      name: 'fiv',
      label: 'FIV',
      type: 'slide-toggle',
      value: false,
    },
    {
      name: 'felv',
      label: 'FELV',
      type: 'slide-toggle',
      value: false,
    },
    {
      name: 'pif',
      label: 'PIF',
      type: 'slide-toggle',
      value: false,
    },
  ];
  isEditMode: boolean = false;

  initialData: any;
  constructor(
    private shared: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initialData = this.shared.getData('felinoToUpdate');
    // Se estiver no modo de edição, preenche os dados iniciais
    // (exemplo fictício, ajuste conforme a sua lógica)
    if (this.initialData.id) {
      if (this.initialData && this.initialData.id) {
        this.isEditMode = true;
      }
    }
  }
  /**
   * Método chamado quando o formulário for submetido.
   * Recebe os dados do formulário e realiza a ação necessária
   * (por exemplo, uma chamada HTTP para atualizar ou criar um registro).
   *
   * @param formValue - Os dados enviados pelo formulário.
   */
  onFormSubmitted(formValue: any): void {
    console.log('Formulário submetido:', formValue);
    // Aqui você pode chamar sua API (POST para criação ou PUT para atualização)
    // Exemplo: this.apiService.save(formValue).subscribe(...);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
