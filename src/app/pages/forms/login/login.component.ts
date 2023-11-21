import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { Persona } from '../../../persona';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  personas:any ={
    id:'',
    nombre:'',
    contacto:'',
    contrasena:'',
    email:'',
    rol:''
  }
  
  data:any;
  persona = new Persona();
  loginObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    Result: false,
    Message:''
  };
  constructor(private router: Router, private http: HttpClient, private dataService:DataService) { }

  ngOnInit(): void {
    this.getpersonasData();
  }
  getpersonasData(){
    this.dataService.getDataPersona().subscribe(res => {
      this.personas = res;
      this.persona = this.personas.filter(item => item.id);
    })
  }
  start(){
    const coincidencias = this.personas.filter(item => item.email === this.loginObj.UserName && item.contrasena === this.loginObj.Password);
    const num = coincidencias[0]['id'];
    const rol = coincidencias[0]['rol'];
    const nombre = coincidencias[0]['nombre'];
    if (coincidencias.length > 0) {
      localStorage.setItem('user',this.loginObj.UserName);
      localStorage.setItem('id',num);
      localStorage.setItem('rol',rol);
      localStorage.setItem('nombre',nombre);
      localStorage.setItem('paginaRecargada', 'false');
      this.router.navigateByUrl('verlocales');
      //console.log('Se encontraron coincidencias');
      //console.log(localStorage.getItem('paginaRecargada'));
    }
    //}
  }
  recargarPagina(): void {
    window.location.reload();
  }
}

