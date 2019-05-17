import { Component, OnInit, Inject } from "@angular/core";
import { MembersService } from "../../services/members.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormService } from "../../services/form.service";
import { COMMA, ENTER, SPACE } from "@angular/cdk/keycodes";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Sport } from "../../models/sport";
import { SportsService } from "../../services/sports.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.css"]
})
export class MemberFormComponent implements OnInit {
  /** Component containing the form for adding and editing member */

  registerForm: FormGroup;
  tags: Sport[];
  tagsCopy = [];

  constructor(
    //Injecting data property to dynamically render dialog title
    @Inject(MAT_DIALOG_DATA) public data,
    private formService: FormService,
    public dialogRef: MatDialogRef<MemberFormComponent>,
    private sportsService: SportsService,
    private fb: FormBuilder
  ) {}

  get sportsArr() {
    return this.formService.form.get("sportsAdded") as FormArray;
  }


  //On onSelect and onRemove, I check for tag.name or tag.value, because when an element is pushed to the form group
  //and then back to the tags array, the value has changed to type "FormControl", so the name of the sport has to be accessed
  //through the value property
  onSelect(tag: any) {
    console.log(this.tagsCopy);
    this.tagsCopy = this.tags;
    this.sportsArr.push(this.fb.control(tag.name || tag.value));
    this.tagsCopy.splice(this.tagsCopy.indexOf(tag), 1);
  }

  onRemove(index, tag): void {
    console.log(this.tagsCopy);
    this.tagsCopy.push(tag);
    this.sportsArr.removeAt(
      this.sportsArr.value.findIndex(sport => sport.name === tag.name || tag.value)
    );
  }

  onClose() {
    this.formService.form.reset();
    this.formService.initializeFormGroup();
    this.dialogRef.close();
  }

  ngOnInit() {
    this.sportsService
      .getSports()
      .subscribe(
        data => (this.tags = data),
        err => console.log(err),
        () => (this.tagsCopy = this.tags)
      );
  }
}
