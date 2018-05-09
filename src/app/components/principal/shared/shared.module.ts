import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        Error404Component
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        Error404Component
    ]
})

export class SharedModule {}