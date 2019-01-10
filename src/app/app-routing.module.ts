import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementosComponent } from './pages/elementos/elementos.component';
import { ElementoComponent } from './pages/elemento/elemento.component';

const routes: Routes = [
{path: '', component: ElementosComponent },
{path: 'elemento/:id', component: ElementoComponent },
{path: '**', component: ElementosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
