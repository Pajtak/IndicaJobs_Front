import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [


  {path:'', redirectTo: 'bem-vindo', pathMatch: 'full'},

  {path:'bem-vindo',component: BemVindoComponent},
  {path:'login-cadastrar', component: LoginCadastroComponent},
  {path:'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
