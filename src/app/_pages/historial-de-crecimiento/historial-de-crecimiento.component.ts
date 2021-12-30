import { Historial } from './../_model/historial';
import { ServiceService } from './../../_services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-historial-de-crecimiento',
  templateUrl: './historial-de-crecimiento.component.html',
  styleUrls: ['./historial-de-crecimiento.component.css']
})
export class HistorialDeCrecimientoComponent implements OnInit {

  listaHistorial: Historial[]=[];

  constructor( private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getHistorial().subscribe(data=>{
      this.listaHistorial = data;
      console.log(data);
    })
  }

}
