import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { CrearlocalComponent } from './crearlocal/crearlocal.component';
import { CrearpersonaComponent } from './crearpersona/crearpersona.component';
import { VerlocalesComponent } from './verlocales/verlocales.component';
import { EditarlocalComponent } from './editarlocal/editarlocal.component';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { EditarpersonasComponent } from './editarpersonas/editarpersonas.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    CrearlocalComponent,
    CrearpersonaComponent,
    VerlocalesComponent,
    EditarlocalComponent,
    VerpersonasComponent,
    EditarpersonasComponent,
    LoginComponent,
    LogoutComponent,
  ],
})
export class FormsModule { }
