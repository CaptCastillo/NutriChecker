import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FifthPageRoutingModule } from './fifth-routing.module';

import { FifthPage } from './fifth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FifthPageRoutingModule
  ],
  declarations: [FifthPage]
})
export class FifthPageModule {}
