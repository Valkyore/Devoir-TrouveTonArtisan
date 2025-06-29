import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanListeComponent } from './pages/artisan-liste/artisan-liste.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'artisanListe',component:ArtisanListeComponent},
  {path:'artisan/:id', component:ArtisanDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
