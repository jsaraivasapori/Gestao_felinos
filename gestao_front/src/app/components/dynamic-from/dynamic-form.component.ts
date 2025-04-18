import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../models/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: FormField[] = []; // Configuração dos campos
  @Input() initialData: any = {}; // Dados iniciais para o formulário
  @Input() submitLabel: string = 'Enviar'; // Texto do botão de envio
  @Output() formSubmitted = new EventEmitter<any>(); // Emite os dados do formulário

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Configura os controles dinamicamente com base nos campos recebidos de formConfig
    const controlsConfig: { [key: string]: any } = {};
    this.formConfig.forEach((field) => {
      controlsConfig[field.name] = [
        this.initialData[field.name] ?? field.value ?? '',
        field.validators || [],
      ];
    });
    this.form = this.fb.group(controlsConfig);
  }

  onSubmit(): void {
    // Emite os dados do formulário quando ele é submetido e está válido
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
      console.log(this.form.value);
    }
  }

  getErrorKeys(field: FormField): string[] {
    // Retorna as chaves dos erros definidos na configuração de mensagens de erro
    return field.errorMessages ? Object.keys(field.errorMessages) : [];
  }
}
