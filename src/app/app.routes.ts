import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { Button1705Component } from './pages/buttons/button-1705/button-1705.component';

export const routes: Routes = [
  {
    path: ``,
    component: MainLayoutComponent,
    children: [{ path: `button/1705`, component: Button1705Component }],
  },
];
