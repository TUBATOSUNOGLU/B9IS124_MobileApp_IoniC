import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {SidebarComponent} from '../widgets/sidebar/sidebar.component';
import {AddProductComponent} from '../widgets/add-product/add-product.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, SidebarComponent, AddProductComponent]
})
export class HomePageModule {}
