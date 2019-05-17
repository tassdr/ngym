import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {

  /** Component responsible for confimation dialog on delete member */

  //Injecting message property from dialog data, as to not hardcode the message included in the confirm dialog
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ConfirmFormComponent>) { }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close(false);
  }

}
