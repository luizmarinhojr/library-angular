export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: Array<string>;

    constructor(codigo: number = 0, codEditora: number = 0, titulo: string = '', resumo: string = '', autores: Array<string> = []) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}

