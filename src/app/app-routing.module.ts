import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcCreatComponent } from './components/gc/gc-creat/gc-creat.component';
import { HomeComponent } from './components/home/home.component';
import { MemberCreatComponent } from './components/member/member-creat/member-creat.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'member-creat', component: MemberCreatComponent},
  {path: 'gc-creat', component: GcCreatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
