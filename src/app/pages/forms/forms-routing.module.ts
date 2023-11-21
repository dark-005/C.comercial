import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CrearlocalComponent } from './crearlocal/crearlocal.component';
import { CrearpersonaComponent } from './crearpersona/crearpersona.component';
import { VerlocalesComponent } from './verlocales/verlocales.component';
import { EditarlocalComponent } from './editarlocal/editarlocal.component';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { EditarpersonasComponent } from './editarpersonas/editarpersonas.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'crearlocal',
        component: CrearlocalComponent
      },
      {
        path: 'crearpersona',
        component: CrearpersonaComponent
      },
      {
        path: 'verlocales',
        component: VerlocalesComponent
      },
      {
        path: 'verpersonas',
        component: VerpersonasComponent
      },
      {
        path: 'editarlocal/:id',
        component: EditarlocalComponent
      },
      {
        path: 'editarpersonas/:id',
        component: EditarpersonasComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

