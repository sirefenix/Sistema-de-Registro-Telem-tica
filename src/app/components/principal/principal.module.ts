import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { PrincipalComponent } from './principal.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './new/new.component';
import { SupportComponent } from './support/support.component';
import { AdminComponent } from './admin/admin.component';
import { PRINCIPAL_ROUTES } from './principal.routes';



@NgModule({

    declarations: [
        PrincipalComponent,
        HomeComponent,
        RegisterComponent,
        NewComponent,
        SupportComponent,
        AdminComponent
    ],
    exports: [
        HomeComponent,
        RegisterComponent,
        NewComponent,
        SupportComponent,
        AdminComponent
    ],
    imports: [
        SharedModule,
        PRINCIPAL_ROUTES
    ]
})

export class PagesModule { }