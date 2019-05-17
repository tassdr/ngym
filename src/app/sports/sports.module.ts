import { NgModule } from '@angular/core';

import { SportsComponent } from './sports.component';
import { AngularMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { SportsRoutingModule } from './sports-routing.module';
import { SportsFormComponent } from './sports-form/sports-form.component';

@NgModule({
    declarations: [
        SportsComponent,
        SportsFormComponent
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        SportsRoutingModule
    ]
})
export class SportsModule {}

