import { UppercasePipe } from './../common/pipes/uppercase.pipe';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalService } from './shared/rental.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';

const routes: Routes = [
  {
    path: 'rentals', component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent },
      { path: ':rentalId', component: RentalDetailComponent }
    ]
  }
]
@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule, NgPipesModule],
  providers: [RentalService]
})
export class RentalModule {

}