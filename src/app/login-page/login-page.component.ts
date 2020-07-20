import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SevaUserRoleModel } from "../model/seva_user_role_model";
import { SevaUserModel } from "../model/seva_user_model";
import { LoginUserService } from "../login-user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private loginUserService: LoginUserService
  ) {}

  ngOnInit(): void {}

  sevaUser = new SevaUserRoleModel();

  gotoRegisterPage() {
    console.log("button clicked");
    this.router.navigateByUrl("register");
  }

  loginUser(sevaUser: SevaUserModel) {
    this.loginUserService
      .loginUserService(sevaUser)
      .subscribe((data: SevaUserModel) => {
        console.log(data);
      });
  }
}
