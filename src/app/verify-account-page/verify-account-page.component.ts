import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VerifyAccountService } from "../verify-account.service";

@Component({
  selector: "app-verify-account-page",
  templateUrl: "./verify-account-page.component.html",
  styleUrls: ["./verify-account-page.component.scss"],
})
export class VerifyAccountPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private verifyAccountService: VerifyAccountService
  ) {}

  jwtToken: String;
  showSpinner: Boolean = true;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.jwtToken = params["token"];
    });
    console.log("Url Id: ", this.jwtToken);
    this.verifyAccountService
      .verifyAccountService(this.jwtToken)
      .subscribe((data: any[]) => {
        console.log(data);
      });
    this.showSpinner = false;
  }
}
