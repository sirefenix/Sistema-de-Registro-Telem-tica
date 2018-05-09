import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './components/principal/shared/error404/error404.component';
import { AdminproComponent } from './components/connectecadmin/adminpro/adminpro.component';



const appRoutes: Routes = [
    { path: 'adminpro', component: AdminproComponent},
    { path: '**', component: Error404Component },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

