import { Component } from '@angular/core';
import { NbComponentStatus,  NbComponentShape } from '@nebular/theme';
import { Persona } from '../../../persona';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'ngx-verpersonas',
  templateUrl: './verpersonas.component.html',
  styleUrls: ['./verpersonas.component.scss']
})
export class VerpersonasComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  fruta = false;
  ropa = false;
  deporte = false;
  personas:any;
  persona = new Persona();

  constructor(private dataService:DataService){
  }
  ngOnInit(): void{
    this.getpersonasData();
  }
  getpersonasData(){
    this.dataService.getDataPersona().subscribe(res => {
      this.personas = res;
    })
  }
  insertData(){
    this.dataService.insertDataPersona(this.persona).subscribe(res => {
      console.log(res);
    })
  }

  deleteDataPersona(id) {
  this.dataService.deleteDataPersona(id).subscribe(res =>{
    this.getpersonasData();
    })
  }
}
