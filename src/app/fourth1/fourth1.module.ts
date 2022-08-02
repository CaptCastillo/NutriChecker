import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fourth1PageRoutingModule } from './fourth1-routing.module';

import { Fourth1Page } from './fourth1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fourth1PageRoutingModule
  ],
  declarations: [Fourth1Page]
})
export class Fourth1PageModule {}
