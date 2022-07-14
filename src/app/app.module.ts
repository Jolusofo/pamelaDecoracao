import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaPrincipalModule } from './components/pagina-principal/pagina-principal.module';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
