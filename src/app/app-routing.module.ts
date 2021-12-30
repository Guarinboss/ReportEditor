import { EstadisticasComponent } from './_pages/estadisticas/estadisticas.component';
import { HistorialDeCrecimientoComponent } from './_pages/historial-de-crecimiento/historial-de-crecimiento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './_pages/registro/registro.component';
import { ListaDeUsuariosComponent } from './_pages/lista-de-usuarios/lista-de-usuarios.component';
import { LoginComponent } from './_pages/login/login.component';
import { EditorComponent } from './_pages/editor/editor.component';

const routes: Routes = [
  {path: 'historial', component:HistorialDeCrecimientoComponent},
  {path: 'estadisticas', component:EstadisticasComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'listadeusuarios', component:ListaDeUsuariosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'editor', component:EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
