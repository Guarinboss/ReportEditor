import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialDeCrecimientoComponent } from './_pages/historial-de-crecimiento/historial-de-crecimiento.component';
import { EstadisticasComponent } from './_pages/estadisticas/estadisticas.component';
import { FormsModule } from '@angular/forms'
import { ServiceService } from './_services/service.service';
import { RegistroComponent } from './_pages/registro/registro.component';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ListaDeUsuariosComponent } from './_pages/lista-de-usuarios/lista-de-usuarios.component';
import { LoginComponent } from './_pages/login/login.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './_pages/editor/editor.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RecuperarContrasenaComponent } from './_pages/_dialogs/recuperar-contrasena/recuperar-contrasena.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    HistorialDeCrecimientoComponent,
    EstadisticasComponent,
    RegistroComponent,
    ListaDeUsuariosComponent,
    LoginComponent,
    EditorComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    AngularEditorModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    CKEditorModule
  ],

  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
