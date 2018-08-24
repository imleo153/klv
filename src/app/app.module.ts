import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Modules } from './components/modules/modules';
import { Nav } from './components/nav/nav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Modules,
    Nav
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}