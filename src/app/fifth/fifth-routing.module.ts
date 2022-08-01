import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FifthPage } from './fifth.page';

const routes: Routes = [
  {
    path: '',
    component: FifthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifthPageRoutingModule {}
