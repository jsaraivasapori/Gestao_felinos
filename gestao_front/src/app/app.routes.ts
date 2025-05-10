import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FelinosComponent } from './pages/felinos/felinos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VacinasComponent } from './pages/vacinas/vacinas.component';
import { ProcedimentosComponent } from './pages/procedimentos/procedimentos.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FelinosFormComponent } from './pages/felinos/edit-felinos/felinos-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'felinos',
        component: FelinosComponent,
        children: [
          {
            component: FelinosFormComponent,
            path: 'form',
          },
          {
            component: FelinosComponent,
            path: 'novo',
          },
        ],
      },
      {
        path: 'vacinas',
        component: VacinasComponent,
      },
      {
        path: 'procedimentos',
        component: ProcedimentosComponent,
      },
      {
        path: 'voluntarios',
        component: VoluntariosComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
    ],
  },
];
