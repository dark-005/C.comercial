import { Component } from '@angular/core';
import { Persona } from '../../../persona';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.scss']
})
export class CrearpersonaComponent {
  personas:any;
  persona = new Persona();

  constructor(private dataService:DataService, private router: Router){
  }
  
  ngOnInit(): void{
    this.getPersonasData();
  }
  getPersonasData(){
    this.dataService.getDataPersona().subscribe(res => {
      this.personas = res;
    })
  }
  insertPersona(){
    this.dataService.insertDataPersona(this.persona).subscribe(res => {
      console.log(res);
      this.router.navigate(['../verlocales']);  })
  }
}  
