import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SevaUserModel } from "../model/seva_user_model";
import { SevaUserRoleModel } from "../model/seva_user_role_model";

import { RegisterUserService } from "../register-user.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) {}

  ngOnInit(): void {}

  sevaUserModel = new SevaUserModel();

  gotoSignInPage() {
    console.log("button clicked");
    this.router.navigateByUrl("login");
  }

  registerUser(sevaUserModel: SevaUserModel) {
    this.sevaUserModel = sevaUserModel;
    this.registerUserService
      .registerUserService(this.sevaUserModel)
      .subscribe((data: SevaUserModel) => {
        console.log(data);
        this.sevaUserModel = data;
      });
  }
}
