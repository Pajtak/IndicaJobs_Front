import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { InicioComponent } from './inicio/inicio.component';
import { PostagensComponent } from './postagens/postagens.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginCadastroComponent,
    RodapeComponent,
    NavBarComponent,
    BemVindoComponent,
    EsqueceuSenhaComponent,
    InicioComponent,
    PostagensComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
    
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
