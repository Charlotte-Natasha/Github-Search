import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';


const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch:'full'},
  {path:'main', component:MainComponent},
  {path:'repo', component:RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
