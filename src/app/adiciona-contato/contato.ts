export enum TipoContato {
    AMIGO = 'Amigo(a)', 
    FAMILIA = 'Família',
    IFRN = 'IFRN', 
    TRAB = 'Trabalho', 
    CONHECIDO='Conhecido', 
    OUTRO = 'Outro'
}
export class Contato {
  nome: string;
  email: string;
  tel: string;  
  aniversario: string;
  tipo: TipoContato;

  constructor(nome: string, email: string, tel: string, aniv: string, tipo: TipoContato) {
    this.nome = nome;
    this.email = email;
    this.tel = tel;
    this.aniversario = aniv
    this.tipo = tipo;
  }
}
