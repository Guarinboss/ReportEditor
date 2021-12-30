import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment"
import { Usuarios } from "../_pages/_model/usuarios";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class usuariosService {

    private url: string =`${environment.HOST}/user/list`;

    constructor(private http: HttpClient) { }

    postRegistrarUsuarios(usuarios: Usuarios): Observable<any>{
        return this.http.post<any>(this.url + 'add', usuarios);

    }

    getUsuarios(){
        return this.http.get<Usuarios[]>(this.url);
    }
}