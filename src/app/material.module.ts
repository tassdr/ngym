import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule, MatFormField, MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule, MatChipInput} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatInputModule} from "@angular/material/input"
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatChipsModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCheckboxModule
    ]
})

export class AngularMaterialModule {}