import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { VerlocalesComponent } from './forms/verlocales/verlocales.component';
import { VerpersonasComponent } from './forms/verpersonas/verpersonas.component';
import { LoginComponent } from './forms/login/login.component';
import { LogoutComponent } from './forms/logout/logout.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'verlocales',
      component: VerlocalesComponent
    },
    {
      path: 'verpersonas',
      component: VerpersonasComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
