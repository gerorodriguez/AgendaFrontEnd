import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';


@NgModule({
  declarations: [
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactDetailsRoutingModule,
  ]
})
export class ContactDetailsModule { }
