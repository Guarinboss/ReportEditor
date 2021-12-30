import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/_services/service.service';
import { Usuarios } from '../_model/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;

  inputType = 'password';
  visible = false;


  constructor(private router: Router,
              private service: ServiceService,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
    });
  }

  onFromSubmit(){
    console.log(this.form.value);
    let formularioRegistro = this.form.value;
    this.registrar(formularioRegistro);
  }

  registrar(usuarios:Usuarios) {
    this.service.registrarUsuario(usuarios).subscribe(data=>{
      alert("Se registro correctamente");
      this.router.navigate(['listadeusuarios']);
    })

    
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
