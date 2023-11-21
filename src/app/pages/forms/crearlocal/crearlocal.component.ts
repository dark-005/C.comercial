import { Component } from '@angular/core';
import { Local } from '../../../local';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-crearlocal',
  templateUrl: './crearlocal.component.html',
  styleUrls: ['./crearlocal.component.scss']
})
export class CrearlocalComponent {
  fruta = false;
  ropa = false;
  deporte = false;
  locales:any;
  local = new Local();
  
  constructor(private dataService:DataService, private router: Router){

  }
  ngOnInit(): void{
    this.getlocalesData();
  }
  getlocalesData(){
    this.dataService.getData().subscribe(res => {
      this.locales = res;
    })
  }
  insertData(){
    this.dataService.insertData(this.local).subscribe(res => {
      console.log(res);
      this.router.navigate(['../verlocales']);
    })
  }


  mostrarsubtipos(fruta,ropa,deporte){
    if(this.fruta=true){
      this.ropa = false;
      this.deporte = false;
    }else if(this.ropa = true){
      this.fruta = false;
      this.deporte = false;
    }else if(this.deporte = true){
      this.fruta = false;
      this.ropa = false;
    }else{
      this.fruta = false;
      this.ropa = false;
      this.deporte = false;
    }
  }
}

