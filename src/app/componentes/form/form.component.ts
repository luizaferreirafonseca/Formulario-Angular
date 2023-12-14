import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Endereco } from '../../modelos/Endereco';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private servico: FormService){}

  

  endereco = new Endereco(); 


  obterEndereco():void{
    this.servico.retornarEndereco(this.formulario.value.cep)
    .subscribe(retorno => {
      this.endereco = retorno; 
    })
  }




formulario = new FormGroup({
nome: new FormControl,
data: new FormControl,
cep: new FormControl,
contato: new FormControl,
email: new FormControl,


})


mostrarTabela = false; 

exibirNaTabela() {
  this.mostrarTabela = true; 

  this.obterEndereco(); 

}

}
