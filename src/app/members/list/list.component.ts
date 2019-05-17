import { Component, OnInit, ViewChild } from "@angular/core";
import { MembersService } from "../../services/members.service";
import { User } from "../../models/user";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/table";
import { MatTableDataSource, MatPaginator, MatTable } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProfileComponent } from "../profile/profile.component";
import { MemberFormComponent } from "../member-form/member-form.component";
import { DialogService } from "../../services/dialog.service";
import { FormService } from "../../services/form.service";
import { SnackbarService } from "../../services/snackbar.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns = ["avatar", "name", "sports", "actions"];
  searchTerm: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private membersService: MembersService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private formService: FormService,
    private snackBarService: SnackbarService
  ) {}

  fetchData() {
    this.membersService.getMembers().subscribe(
      data => (this.dataSource = new MatTableDataSource(data)),
      err => console.log(err),
      // Maintains pagination
      () => (this.dataSource.paginator = this.paginator)
    );
  }

  // "res" condition in onCreate, onEdit, and onDelete methods is a value returned by pressing dialog buttons
  //  "Submit/Yes - (true)" or "Cancel/Close(false)"

  // CREATE USER
  onCreate() {
    this.dialogService
      .openMemberCreateDialog()
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.membersService
            .addMember(this.formService.form.value)
            .subscribe(
              () => this.fetchData(),
              error => this.snackBarService.fail(),
              () => this.snackBarService.success("created")
            );
          this.formService.form.reset();
          this.formService.initializeFormGroup();
        }
      });
  }

  // EDIT USER
  onEdit(user) {
    this.formService.populateForm(user);
    this.dialogService
      .openMemberEditDialog()
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.membersService
            .updateMember(user.id, this.formService.form.value)
            .subscribe(
              () => this.fetchData(),
              error => this.snackBarService.fail(),
              () => this.snackBarService.success("edited")
            );
          this.formService.form.reset();
          this.formService.initializeFormGroup();
        }
      });
  }


    // DELETE USER
    onDelete(user) {
      this.dialogService
        .openConfirmDialog("Are you sure you want to delete this member?")
        .afterClosed()
        .subscribe(res => {
          if (res) {
            this.membersService
              .deleteMember(user.id)
              .subscribe(
                () => this.dataSource.data = this.dataSource.data.filter(i => i !== user),
                error => this.snackBarService.fail(),
                () => this.snackBarService.success("deleted")
              );
          }
        });
    }

  //When x button on search field is pressed
  onSearchClear() {
    this.searchTerm = "";
    this.filterResults();
  }

  //Used when search field is filled
  filterResults() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  ngOnInit() {
    this.membersService
      .getMembers()
      .subscribe(
        data => (this.dataSource = new MatTableDataSource(data)),
        err => this.snackBarService.fail(6000),
        () => (this.dataSource.paginator = this.paginator)
      );
  }
}
