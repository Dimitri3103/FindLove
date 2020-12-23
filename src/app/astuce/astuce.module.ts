import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AstuceComponent } from './astuce.component';
import { AstuceDetailsComponent } from './astuce-details/astuce-details.component';

const routes: Routes = [
  { path: '', component: AstuceComponent },
  { path: 'astuce-details/:id', component: AstuceDetailsComponent }
]


@NgModule({
  declarations: [AstuceComponent, AstuceDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AstuceComponent
  ]
})
export class AstuceModule { }
