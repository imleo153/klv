import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyContainer } from './components/body/body.container';
import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainer
  ],
  imports: [
    BrowserModule,
    DragAndDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,BodyContainer]
})

export class AppModule { 
  
}
