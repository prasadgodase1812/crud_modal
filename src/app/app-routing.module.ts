import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SubjectComponent } from './component/subject/subject.component';

const routes: Routes = [
  {path:'roll',redirectTo:'subject',pathMatch:'full'},
  {path:'',component:LoginComponent},
  {path:'subject',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
