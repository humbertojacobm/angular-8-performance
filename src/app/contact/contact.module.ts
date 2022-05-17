import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

// import { ContactComponent } from './components/contact/contact.component';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    // ContactComponent,
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ContactModule {

}
