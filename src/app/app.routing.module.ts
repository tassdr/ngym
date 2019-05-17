import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListComponent } from './members/list/list.component';
import { ProfileComponent } from './members/profile/profile.component';

const routes: Routes = [
    {path: '', component: ListComponent},
    {path: "activities", loadChildren: "./sports/sports.module#SportsModule"},
    {path: "app", loadChildren: "./members/profile/profile.module#ProfileModule"}

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        [RouterModule]
    ]
})

export class AppRoutingModule {}