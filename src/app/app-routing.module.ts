import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AddTemoignageComponent } from './temoignage/add-temoignage/add-temoignage.component';
import { ListTemoignageComponent } from './temoignage/list-temoignage/list-temoignage.component';
import { UpdateTemoignageComponent } from './temoignage/update-temoignage/update-temoignage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  {path:'profile', component: ProfileComponent},
  {path:'admin', component: AdminComponent},
  { path: 'add-temoignage', component: AddTemoignageComponent },
  { path: 'update-temoignage/id', component: UpdateTemoignageComponent },
  { path: 'list-temoignage', component: ListTemoignageComponent },
  { path: 'astuce', loadChildren: () => import('./astuce/astuce.module').then(m => m.AstuceModule) },
  { path: 'temoignage', loadChildren: () => import('./temoignage/temoignage.module').then(m => m.TemoignageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
