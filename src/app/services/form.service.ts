import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../modelos/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }


  retornarEndereco(cep:string):Observable<Endereco>{
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
