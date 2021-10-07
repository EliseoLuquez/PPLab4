import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'bienvenido', component: BienvenidoComponent},
  // {path: '', redirectTo:'bienvenido', pathMatch:'full'},
  // {path: 'busqueda', component: BusquedaComponent},
  // {path: 'peliculas', loadChildren: () => import('./modulos/peliculas/peliculas.module').then(m => PeliculasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
