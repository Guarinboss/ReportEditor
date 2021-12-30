import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/_services/service.service';
import { Usuarios } from '../_model/usuarios';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {

  listadeUsuarios: Usuarios[]=[];

  constructor( private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data=>{
      this.listadeUsuarios = data;
      console.log(data);
    })
  }

}
