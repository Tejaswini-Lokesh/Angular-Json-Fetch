import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EzLoginComponent } from './ez-login/ez-login.component';
import { CommunityListComponent } from './community-list/community-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login',pathMatch:'full'  },
  // { path: '**', redirectTo: 'login' },
  {path:'' , component:EzLoginComponent},
  {path: 'login' , component:EzLoginComponent},
  {path: 'communityList', component: CommunityListComponent},
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component: EzLoginComponent}

]
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EzLoginComponent,CommunityListComponent];