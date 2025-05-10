import { Injectable } from '@angular/core';

/**
 * Serviço responsável por compartilhar dados entre componentes,
 * utilizando uma estrutura de chave-valor para armazenar as informações.
 *
 * A utilização desse serviço permite manter uma única instância compartilhada
 * através da aplicação, possibilitando o armazenamento e a recuperação via chave : valor
 * de dados sem expô-los via URL.
 */
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  /**
   * Objeto que armazena os dados compartilhados, onde cada chave é associada a um valor.
   */
  private sharedData: { [key: string]: any } = {};

  /**
   * Define os dados associados a uma chave específica.
   *
   * @param key - A chave usada para identificar os dados.
   * @param value - O valor dos dados que serão armazenados.
   */
  setData(key: string, value: any): void {
    this.sharedData[key] = value;
  }

  /**
   * Recupera os dados associados a uma dada chave.
   *
   * @param key - A chave cujo valor armazenado deve ser retornado.
   * @returns O valor associado à chave ou undefined se a chave não existir.
   */
  getData(key: string): any {
    return this.sharedData[key];
  }

  /**
   * Remove os dados associados a uma chave específica do armazenamento compartilhado.
   * Elimine sempre quando nao precisar mais do dado compartilhado
   *
   * @param key - A chave cujo valor armazenado será removido.
   */
  clearData(key: string): void {
    delete this.sharedData[key];
  }
}
