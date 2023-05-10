import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcTest1Component } from './test1/test1.component';

const routes: Routes = [{ path: 'test1', component: AbcTest1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
