import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent implements OnInit {

  senhaAtual = {
    valor: "Nenhuma senha à espera no momento"
  } 

  constructor(private http:HttpClientService) { }

  ngOnInit(): void {
    this.getSenhaAtual();
  }

  getSenhaAtual(){
    this.http.get("senha/atual").subscribe(res => this.senhaAtual = res)
  }

  chamarProximaSenha(){
    this.http.get("senha/chamarProxima").subscribe(res => this.senhaAtual = res)
  }

  resetDay(){
    this.http.get("senha/resetDay").subscribe();
    this.getSenhaAtual();
  }

}
