import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacaseupedidoComponent } from './page/facaseupedido/facaseupedido.component';
import { HomeComponent } from './page/home/home.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';
import { TituloComponent } from './page/titulo/titulo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'titulo', component: TituloComponent},
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'facaseupedido', component: FacaseupedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
