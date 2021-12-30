import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appWorkout';
  open = 'true';

  sidenavWidth = 18;
  ngStyle: string | undefined;
  public serviceUrl: string | undefined;

  constructor(private router: Router) {
    if (window.location.href == "http://localhost:4200/login") {
      this.open = "false";
      
  }
  else{
    this.open = "true";
  }
}



increase() {

  this.sidenavWidth = 18;

}
decrease() {
  this.sidenavWidth = 5;

}


dirigirAHistorial(): void {
  this.router.navigate(["editor"]);

}

dirigirAEstadisticas(): void {
  this.router.navigate(["estadisticas"]);
}

dirigirARegistro(): void {
  this.router.navigate(["registro"]);
}

dirigirAListaDeUsuarios(): void {
  this.router.navigate(["listadeusuarios"]);
}
}


