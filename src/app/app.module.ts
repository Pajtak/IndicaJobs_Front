import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import { MatDividerModule} from '@angular/material/divider'


import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

    LoginCadastroComponent,
    RodapeComponent,
    NavBarComponent,
    BemVindoComponent,
    EsqueceuSenhaComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
