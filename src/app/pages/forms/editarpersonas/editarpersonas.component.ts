import { Component } from '@angular/core';
import { Persona } from '../../../persona';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'ngx-editarpersonas',
  templateUrl: './editarpersonas.component.html',
  styleUrls: ['./editarpersonas.component.scss']
})
export class EditarpersonasComponent {
  id:any;
  data:any;
  persona = new Persona();

  constructor(private route:ActivatedRoute, private dataService: DataService, private router: Router){

  }
  ngOnInit(): void{
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getDataPersona();
  }
    getDataPersona(){
      this.dataService.getPersonaById(this.id).subscribe(res =>{
      // console.log(res);
        this.data = res;
        this.persona = this.data;
      })
    }
    updatePersona(){
      this.dataService.updateDataPersona(this.id, this.persona).subscribe(res =>{
  
      });
      this.router.navigate(['../verlocales']);
    }
}
