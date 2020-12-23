import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TemoignageComponent } from './temoignage.component';
import { TemoignageDetailsComponent } from './temoignage-details/temoignage-details.component';
import { AddTemoignageComponent } from './add-temoignage/add-temoignage.component';
import { UpdateTemoignageComponent } from './update-temoignage/update-temoignage.component';
import { ListTemoignageComponent } from './list-temoignage/list-temoignage.component';

const routes: Routes = [
  { path: '', component: TemoignageComponent },
  { path: 'temoignage-details/:id', component: TemoignageDetailsComponent },
  { path: 'add-temoignage', component: AddTemoignageComponent },
  { path: 'update-temoignage', component: UpdateTemoignageComponent },
  { path: 'list-temoignage', component: ListTemoignageComponent },
]


@NgModule({
  declarations: [TemoignageComponent, TemoignageDetailsComponent, AddTemoignageComponent, UpdateTemoignageComponent, ListTemoignageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TemoignageComponent
  ]
})
export class TemoignageModule { }
