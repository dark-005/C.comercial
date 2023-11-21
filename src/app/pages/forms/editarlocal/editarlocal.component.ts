import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { Local } from '../../../local';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-editarlocal',
  templateUrl: './editarlocal.component.html',
  styleUrls: ['./editarlocal.component.scss']
})
export class EditarlocalComponent implements OnInit{
  id:any;
  data:any;
  fruta = false;
  ropa = false;
  deporte = false;
  local = new Local();

  constructor(private route:ActivatedRoute, private dataService: DataService, private router: Router){

  }
  ngOnInit(): void{
   console.log(this.route.snapshot.params.id);
   this.id = this.route.snapshot.params.id;
   this.getData()
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

  getData(){
    this.dataService.getLocalById(this.id).subscribe(res =>{
    // console.log(res);
      this.data = res;
      this.local = this.data;
    })
  }
  updateLocal(){
    this.dataService.updateData(this.id, this.local).subscribe(res =>{

    });
    this.router.navigate(['../verlocales']);
  }
}
