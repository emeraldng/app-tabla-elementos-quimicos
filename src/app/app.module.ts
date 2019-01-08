import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementoComponent } from './pages/elemento/elemento.component';
import { ElementosComponent } from './pages/elementos/elementos.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementoComponent,
    ElementosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
