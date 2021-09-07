import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivedPageRoutingModule } from './archived-routing.module';

import { ArchivedPage } from './archived.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ArchivedPageRoutingModule
  ],
  declarations: [ArchivedPage]
})
export class ArchivedPageModule {}
