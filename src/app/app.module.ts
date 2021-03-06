import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import {app_routing} from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CoordinadorComponent } from './components/coordinador/coordinador.component';
import { SocorristaComponent } from './components/socorrista/socorrista.component';
import { AdminGeneralComponent } from './components/admin-general/admin-general.component';
import { GestorPlayasComponent } from './components/gestor-playas/gestor-playas.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoordinadorComponent,
    SocorristaComponent,
    AdminGeneralComponent,
    GestorPlayasComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
