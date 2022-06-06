import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatToolbarModule, HomeRoutingModule],
})
export class HomeModule {}
