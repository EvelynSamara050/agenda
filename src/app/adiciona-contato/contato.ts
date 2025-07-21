import { NgModel } from "@angular/forms"

export class Contato {
  nome: string
  aniversario: Date
  tipo: string

constructor(nm: string, an:Date, tipo:string){
  this.nome = nm 
  this.aniversario = an
  this.tipo = tipo
  
}
}