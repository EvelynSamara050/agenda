import { Component } from '@angular/core';
import { Contato, TipoContato } from './contato';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, 
  ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adiciona-contato',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrls: ['./adiciona-contato.css'] // se tiver CSS
})
export class AdicionaContato {
  contatos: Contato[]
  tipos: string[]
  formContato: FormGroup

  constructor(private fb: FormBuilder) {
    //const telExp = new RegExp('^\(?\d{2}\)?\s?9\d{4}-?\d{4}s$')
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
      tipo: [TipoContato.AMIGO, [Validators.required]],
    })
    this.contatos = []
    this.tipos = Object.values(TipoContato)
  }

   adicionar() {
     let dados = this.formContato.value
     const novo = new Contato(dados.nome,
       dados.email,
       dados.tel,
       this.getTipo(dados.tipo))
     this.contatos.push(novo)
     console.log(this.contatos)
   }

   limparCampos(){
    this.formContato.reset({
      nome:'',
      email:'',
      tipo: TipoContato.AMIGO
    })
   }
   getTipo(txt: string): TipoContato 
   { if (txt === TipoContato.AMIGO) 
    { return TipoContato.AMIGO }
   else if (txt === TipoContato.FAMILIA)
     { return TipoContato.FAMILIA } 
   else if (txt === TipoContato.IFRN) 
    { return TipoContato.IFRN } 
   else if (txt === TipoContato.TRAB) 
    { return TipoContato.TRAB } 
   else if (txt === TipoContato.CONHECIDO) 
    { return TipoContato.CONHECIDO } 
   else if (txt === TipoContato.OUTRO) 
    { return TipoContato.OUTRO 

    } return TipoContato.OUTRO }
  }