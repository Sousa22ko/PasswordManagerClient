import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  senhaAtual = {
    valor: "Nenhuma senha à espera no momento"
  } 

  senhaGerada = {
    valor: "Nenhuma senha gerada"
  }

  constructor(private http:HttpClientService) { }

  ngOnInit(): void {
    this.getSenhaAtual();
  }

  getSenhaAtual(){
    this.http.get("senha/atual").subscribe(res => this.senhaAtual = res)
  }

  async generateNormalPassword(){
      this.http.get("senha/GNormal").subscribe(res => this.senhaGerada = res)
      this.getSenhaAtual();
  }

  generatePreferencialPassword(){
    this.http.get("senha/GPreferencial").subscribe(res => this.senhaGerada = res)
    this.getSenhaAtual();
  }
}