import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SysopsComponent } from './sysops/sysops.component';
import { SysoptestsComponent } from './sysoptests/sysoptests.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sysops', component: SysopsComponent},
  {path: 'sysops/:testnumber', component: SysoptestsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
