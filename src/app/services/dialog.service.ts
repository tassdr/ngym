import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ConfirmFormComponent } from "../members/confirm-form/confirm-form.component";
import { MemberFormComponent } from "../members/member-form/member-form.component";
import { SportsFormComponent } from '../sports/sports-form/sports-form.component';

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(private dialog: MatDialog) {}
  
  // Service responsible for providing methods that open dialogs which contain the desired components

  //Confirm deletion dialog
  openConfirmDialog(msg) {
    return this.dialog.open(ConfirmFormComponent, {
      width: "60%",
      panelClass: "confirm-dialog-container",
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  //Create dialog
  openMemberCreateDialog() {
    return this.dialog.open(MemberFormComponent, {
      width: "70%",
      disableClose: true,
      data: {
        type: "create"
      }
    });
  }

  //Edit dialog
  openMemberEditDialog() {
    return this.dialog.open(MemberFormComponent, {
      width: "70%",
      disableClose: true,
      data: {
        type: "edit"
      }
    });
  }

  //Add sport dialog
  openSportsDialog() {
    return this.dialog.open(SportsFormComponent, {
      width: "70%",
      disableClose: true,
      data: {
        type: "sport"
      }
    });
  }
}
