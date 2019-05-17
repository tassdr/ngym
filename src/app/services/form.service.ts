import { Injectable } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  // Service which provides a form instance of the FormGroup class.
  // Helps in handling and validating user input when creating users and sports.

  // form: FormGroup = new FormGroup({
  //   firstName: new FormControl("", Validators.required),
  //   lastName: new FormControl("", Validators.required),
  //   sportsAdded: new FormControl("")
  // });


  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    sportsAdded: this.fb.array([])
  });


  sportsForm: FormGroup = this.fb.group({
    sportName: ['', [Validators.required]],
    avatar: [''],
    description: ['']
  })

  initializeFormGroup() {
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      sportsAdded: this.fb.array([])
    });
  }

  initializeSportsFormGroup() {
    this.sportsForm.setValue({}); 
  }

  get sportsArr() {
    return this.form.get('sportsAdded') as FormArray;
  }

  // // Fills form values with a user's details - Used on edit
  populateForm(user) {

    //sid is a random-number property used to pseudo-randomize the sports each user is a member in,
    // since this option is not provided by mockapi.io. Users have an array containing the 7
    // possible combinations of sports. The remainder is always going to be between 0-6, which gives us an index.
    const index = user.sid % 7;
    const sports = (user.sportsAdded === null || user.sportsAdded === undefined) || user.sportsAdded.length ? user.sportsAdded : user.sports[index];
    const control = <FormArray>this.form.controls.sportsAdded;
    user.sportsAdded.map(x=> control.push(this.fb.control(x)))
    this.form.patchValue({firstName: user.firstName, lastName: user.lastName})
  }
}
