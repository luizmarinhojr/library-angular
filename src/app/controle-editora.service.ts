import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
      {
          codEditora: 1,
          nome: "Addison Wesley"
      },
      {
          codEditora: 2,
          nome: "Pearson"
      },
      { 
          codEditora: 3, 
          nome: "Alta Books" 
      }
  ];

  getNomeEditora(codEditora: number): string {
    let editora = this.editoras.filter(e => e.codEditora === codEditora);
    return editora[0].nome;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }


}

