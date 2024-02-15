import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';


const routes: Routes = [
  { path: '', component: TripListingComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}