import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  // Provides snackbar pop-up messages

  //Can be used to open a snackbar with a desired message and time
  openSnackBar(message, time = 3000) {
    this.snackBar.open(message, "OK", {duration: time})
  }

  //Used on successful creation, deletion, or edit
  success(action) {
    this.snackBar.open(`Member ${action} succesfully`, "OK", {duration: 3000})
  }

  //Used when request fails
  fail(time = 3000) {
    this.snackBar.open("Something went wrong. Please try again later", "OK", {duration: time})
  }

}
