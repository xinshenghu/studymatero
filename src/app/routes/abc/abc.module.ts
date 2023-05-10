import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AbcRoutingModule } from './abc-routing.module';
import { AbcTest1Component } from './test1/test1.component';

const COMPONENTS: any[] = [AbcTest1Component];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    AbcRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class AbcModule { }
