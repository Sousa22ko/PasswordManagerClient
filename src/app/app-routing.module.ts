import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenteComponent } from "../app/gerente/gerente.component"
import { ClienteComponent } from "../app/cliente/cliente.component"

const routes: Routes = [
  {path: "Gerente", component: GerenteComponent},
  {path: "Cliente", component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
