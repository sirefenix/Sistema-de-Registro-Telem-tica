import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './components/principal/principal.module';

// Componentes
import { AppComponent } from './app.component';
import { AdminproComponent } from './components/connectecadmin/adminpro/adminpro.component';
import { HeaderadminComponent } from './components/connectecadmin/sharedadmin/headeradmin/headeradmin.component';
import { BreadcrumbsadminComponent } from './components/connectecadmin/sharedadmin/breadcrumbsadmin/breadcrumbsadmin.component';
import { SidebaradminComponent } from './components/connectecadmin/sharedadmin/sidebaradmin/sidebaradmin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminproComponent,
    HeaderadminComponent,
    BreadcrumbsadminComponent,
    SidebaradminComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
