import { Component, OnInit } from '@angular/core';
import { SportsService } from '../services/sports.service';
import { Sport } from '../models/sport';
import { SnackbarService } from '../services/snackbar.service';
import { DialogService } from '../services/dialog.service';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sportsService: SportsService, private snackBarService: SnackbarService, private dialogService: DialogService, private formService: FormService) { }

  sports: Sport[];

  onAddNewSport(sport) {
    this.dialogService
      .openMemberEditDialog()
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.sportsService
            .addSport(this.formService.form.value)
            .subscribe(
              data => this.sports.push(data),
              error => this.snackBarService.fail(),
              () => this.snackBarService.openSnackBar("Sport created succesfully")
            );
          this.formService.form.reset();
          this.formService.initializeSportsFormGroup();
        }
      });
  }

  ngOnInit() {
    this.sportsService.getSports().subscribe(data => this.sports = data,
      error => this.snackBarService.fail()
    );
  }

}
