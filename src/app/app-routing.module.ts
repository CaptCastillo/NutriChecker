import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
  },
  {
    path: 'green',
    loadChildren: () => import('./green/green.module').then( m => m.GreenPageModule)
  },
  {
    path: 'fourth',
    loadChildren: () => import('./fourth/fourth.module').then( m => m.FourthPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'fifth',
    loadChildren: () => import('./fifth/fifth.module').then( m => m.FifthPageModule)
  },
  {
    path: 'fourth1',
    loadChildren: () => import('./fourth1/fourth1.module').then( m => m.Fourth1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
