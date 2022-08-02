import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fourth1Page } from './fourth1.page';

const routes: Routes = [
  {
    path: '',
    component: Fourth1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fourth1PageRoutingModule {}
