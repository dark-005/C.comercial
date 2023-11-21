import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  
  constructor(private router: Router, private http: HttpClient, private dataService:DataService) { }

  ngOnInit(): void {
    this.quitarDatos();
  }
  quitarDatos(){
    const yaRecargada = localStorage.getItem('paginaRecargada');
    if(yaRecargada == "false"){

    localStorage.setItem('user',null);
    localStorage.setItem('id',null);
    localStorage.setItem('rol',null);
    localStorage.setItem('nombre',null);
    localStorage.setItem('paginaRecargada', 'true');
      window.location.reload();

    }
    setTimeout(() => {
      this.router.navigateByUrl("forms/verlocales");
    }, 2000); // Tiempo en milisegundos
  }
}
