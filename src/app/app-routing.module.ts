import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { PlayInterfaceComponent } from './play/play-interface/play-interface.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayInterfaceComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
