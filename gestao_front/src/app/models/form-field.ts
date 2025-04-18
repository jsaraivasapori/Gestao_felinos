import { __param } from 'tslib';

export interface FormField {
  name: string; // Nome do controle (usado no formControlName)
  label: string; // Rótulo exibido no campo
  type: string; // Tipo do input ('text', 'email', 'date', etc.)
  value?: any; // Valor inicial do campo
  validators?: any[]; // Validadores do campo (ex.: Validators.required)
  errorMessages?: {
    // Mensagens de erro personalizáveis
    [errorKey: string]: string;
  };
  options?: {
    value: string;
    label: string;
  }[];
}
