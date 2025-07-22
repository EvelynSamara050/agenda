import { Component } from '@angular/core';
import { Contato } from './contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiciona-contato',
  imports: [CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css'
})
export class AdicionaContato {
  contatos: Contato[]

  constructor() {
    this.contatos = []
  }
  adicionar(nm: string, telefone: string, email: string, an: string, tipo: string,) {
    let aniversario = new Date(an)
    const c = new Contato(nm, telefone, email, aniversario, tipo,)
    this.contatos.push(c)

  }
}