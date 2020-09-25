import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenteComponent } from './gerente/gerente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService }  from './http-client.service'

@NgModule({
  declarations: [
    AppComponent,
    GerenteComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
