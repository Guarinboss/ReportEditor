import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/_services/service.service';
import { usuariosService } from 'src/app/_services/usuarios.service';
import { RecuperarContrasenaComponent } from '../_dialogs/recuperar-contrasena/recuperar-contrasena.component';
import { Usuarios } from '../_model/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  inputType = 'password';
  visible = false;

  public listaDeUsuarios: Usuarios[] = [];

  constructor(private router: Router,
    private service: ServiceService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private obtenerUsuarios: usuariosService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.obtenerUsuarios.getUsuarios().subscribe(data => {
      this.listaDeUsuarios = data;
      console.log(this.listaDeUsuarios);
    })
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });

  }

  onFromSubmit() {
    console.log(this.form.value);
    let formularioRegistro = this.form.value;
    this.registrar(formularioRegistro);
    this.obtenerUsuarios
    this.router.navigate(["/editor"]);

    
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    /*if (this.email.hasError('required')) {
      return 'Contraseña incorrecta';
    }

    return this.email.hasError('email') ? 'contraseña invalida' : '';*/
  }


  registrar(usuarios: Usuarios) {
    this.service.registrarUsuario(usuarios).subscribe(data => {
      alert("Se registro correctamente");
      this.router.navigate(['listadeusuarios']);
    })


  }

  openDialog(){
    this.dialog.open(RecuperarContrasenaComponent);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

}
