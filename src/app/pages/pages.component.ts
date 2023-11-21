import { Component } from '@angular/core';

import { MENU_ITEMS, MENU_ITEMSalt, MENU_ITEMSalt2 } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  rol = localStorage.getItem('rol');
  menu:any;

  ngOnInit(): void{
    if(this.rol == "Admin"){
      this.menu = MENU_ITEMS;
    }else if (this.rol == "Vigilante" || "Representante"){
      this.menu = MENU_ITEMSalt2;
    }else{
      this.menu = MENU_ITEMSalt;
    }
  }

}
