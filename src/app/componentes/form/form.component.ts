import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
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
nome: new FormControl('', [Validators.required]),
data: new FormControl('', [Validators.required]),
cep: new FormControl,
contato: new FormControl('', [Validators.required]),
email: new FormControl('', [Validators.required, Validators.email])


})



mostrarTabela = false; 

exibirNaTabela() {
  this.mostrarTabela = true; 

  this.obterEndereco(); 

}

}
