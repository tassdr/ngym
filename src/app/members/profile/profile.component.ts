import { Component, OnInit } from "@angular/core";
import { MembersService } from "../../services/members.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "../../models/user";
import { FormService } from "../../services/form.service";
import { DialogService } from "../../services/dialog.service";
import { SnackbarService } from "../../services/snackbar.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  private id: string;
  user: User;
  index: number;

  //Used to make an array from the index given b sid % sports.length
  generatedSportsArray: any;
  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute,
    private formService: FormService,
    private dialogService: DialogService,
    private snackBarService: SnackbarService
  ) {}

  onEdit() {
    this.formService.populateForm(this.user);
    this.dialogService
      .openMemberEditDialog()
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.membersService
            .updateMember(this.user.id, this.formService.form.value)
            .subscribe(
              data => (this.user = data),
              error => this.snackBarService.fail(),
              () => this.snackBarService.success("edited")
            );
          this.formService.form.reset();
          this.formService.initializeFormGroup();
        }
      });
  }

  some() {
    console.log();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.membersService.getMember(this.id).subscribe(data => {
          (this.user = data),
          this.index = this.user.sid % this.user.sports.length;
            //The index gives us a comma separated string, which we must turn into an array in order to use it in the template
            (this.generatedSportsArray = this.user.sports[this.index].split(", "));
        }),
          error => this.snackBarService.fail();
      }
    });
  }
}
