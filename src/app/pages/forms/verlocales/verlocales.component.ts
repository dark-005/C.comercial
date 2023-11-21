import { Component } from '@angular/core';
import { NbComponentStatus,  NbComponentShape } from '@nebular/theme';
import { Local } from '../../../local';
import { DataService } from '../../../service/data.service';
import { empty } from 'rxjs';

@Component({
  selector: 'ngx-verlocales',
  templateUrl: './verlocales.component.html',
  styleUrls: ['./verlocales.component.scss']
})
export class VerlocalesComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  rol = '';
  id = '';
  user = '';
  nombre = ''
  cambrepre = '';
  locales:any;
  local = new Local();
  
  constructor(private dataService:DataService){

  }
  ngOnInit(): void{
    
    this.getlocalesData();
    console.log( localStorage.getItem('user'));
    console.log( localStorage.getItem('id'));
    console.log( localStorage.getItem('rol'));
    console.log(localStorage.getItem('paginaRecargada'));
    this.rol =  localStorage.getItem('rol');
    this.user = localStorage.getItem('user');
    this.id =  localStorage.getItem('id');
    this.nombre =  localStorage.getItem('nombre');

 
  }
  getlocalesData(){
    this.dataService.getData().subscribe(res => {
      this.locales = res;
      const repreLocal = this.locales.filter(item => item.representante === this.nombre);
      console.log(repreLocal)
      this.cambrepre = repreLocal[0]['id'];
      

    })
  }
  insertData(){
    this.dataService.insertData(this.local).subscribe(res => {
      console.log(res);
    })
  }

  deleteData(id) {
  this.dataService.deleteData(id).subscribe(res =>{
    this.getlocalesData();
  })
  }
}

