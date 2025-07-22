import { NgModel } from "@angular/forms"

export class Contato {
  private nome: string
  private telefone: string
  private email: string
  private aniversario: Date
  private tipo: string

  constructor(nm: string, tel: string, email: string, an: Date, tipo: string,) {
    this.nome = nm
    this.telefone = tel
    this.email = email
    this.aniversario = an
    this.tipo = tipo

  }
  // Métodos para acessar
  nomeDoContato(): string {
    return this.nome;
  }

  telefoneDoContato(): string {
    return this.telefone;
  }

  emailDoContato(): string {
    return this.email;
  }

  aniversarioDoContato(): Date {
    return this.aniversario;
  }

  tipoDeContato(): string {
    return this.tipo;
  }
  
  mudarNome(novoNome: string): void {
    this.nome = novoNome;
  }

  mudarTelefone(novoTelefone: string): void {
    this.telefone = novoTelefone;
  }

  mudarEmail(novoEmail: string): void {
    this.email = novoEmail;
  }

  mudarAniversario(novoAniversario: Date): void {
    this.aniversario = novoAniversario;
  }

  mudarTipo(novoTipo: string): void {
    this.tipo = novoTipo;
  }

}