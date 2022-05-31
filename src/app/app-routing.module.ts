import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { BeehivesCrudComponent } from './views/beehives-crud/beehives-crud.component';
import { BeehiveCreateComponent } from './components/beehive/beehive-create/beehive-create.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "beehives", component: BeehivesCrudComponent },
  { path: "beehives/create", component: BeehiveCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }