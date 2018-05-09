import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './new/new.component';
import { SupportComponent } from './support/support.component';
import { AdminComponent } from './admin/admin.component';

const principalRoutes: Routes = [
    {
        path: '', component: PrincipalComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'register', component: RegisterComponent},
            { path: 'new', component: NewComponent},
            { path: 'support', component: SupportComponent},
            { path: 'admin', component: AdminComponent},
            { path: '', pathMatch: 'full', redirectTo: '/home' },
        ]
    }
];

export const PRINCIPAL_ROUTES = RouterModule.forChild( principalRoutes );