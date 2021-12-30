import { Historial } from './../_pages/_model/historial';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuarios } from '../_pages/_model/usuarios';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  historial : Historial[] = [];
  usuarios : Usuarios[] = [];
 

  private url: string = `${environment.HOST}/historial`;
  private url2: string = `${environment.HOST}/usuarios`;

  constructor( private http:HttpClient) { }

  getHistorial(){
    return this.http.get<Historial[]>(this.url);
  }

  getUsuarios(){
    return this.http.get<Usuarios[]>(this.url2);
  }

  registrarUsuario(usuarios:Usuarios){
    return this.http.post<Usuarios>(this.url2,usuarios);
  }


  
}
