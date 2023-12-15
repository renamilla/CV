import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Grupo1Component } from './grupo1/grupo1.component';
import { Grupo2Component } from './grupo2/grupo2.component';
import { Grupo3Component } from './grupo3/grupo3.component';
import { Grupo4Component } from './grupo4/grupo4.component';
import { Grupo5Component } from './grupo5/grupo5.component';
import { Grupo6Component } from './grupo6/grupo6.component';
import { Grupo7Component } from './grupo7/grupo7.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppHttpClientModule } from './app-http-client/app-http-client.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Grupo1Component,
    Grupo2Component,
    Grupo3Component,
    Grupo4Component,
    Grupo5Component,
    Grupo6Component,
    Grupo7Component,
    FooterComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
