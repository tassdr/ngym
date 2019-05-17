import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module'

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ProfileRoutingModule
    ]
})
export class ProfileModule {}

