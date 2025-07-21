import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css'
})
export class AdicionaContato {
  contatos: Contato[]

constructor(){
  this.contatos = []
}
adicionar(nm:string, an:string, tipo: string ){
  let aniversario = new Date(an)
  const c = new Contato(nm, aniversario, tipo)

  //consoooooolllle.log(c)
}
}