import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { ListarPensamentosComponent } from './componentes/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  { path: '', component: ListarPensamentosComponent },
  { path: 'criar-pensamento', component: PensamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
