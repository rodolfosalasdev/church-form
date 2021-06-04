import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcCreatComponent } from './components/gc/gc-creat/gc-creat.component';
import { HomeComponent } from './components/home/home.component';
import { MemberCreatComponent } from './components/member/member-creat/member-creat.component';
import { MemberDeleteComponent } from './components/member/member-delete/member-delete.component';
import { MemberUpdateComponent } from './components/member/member-update/member-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'member-creat', component: MemberCreatComponent},
  {path: 'member-delete', component: MemberDeleteComponent},
  {path: 'members/update/:id', component: MemberUpdateComponent},
  {path: 'members/delete/:id', component: MemberDeleteComponent},
  {path: 'gc-creat', component: GcCreatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
