import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
  selector: "ns-challenge-tab",
  templateUrl: "./challenge-tab.component.html",
  styleUrls: ["./challenge-tab.component.css"],
  moduleId: module.id
})
export class ChallengeTabComponent implements OnInit {
  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page
  ) {}

  ngOnInit() {
    this.router.navigate([
      { outlets: { currentChallenge: ['current-challenge'], today: ['today'] }}],
      { 
          relativeTo: this.active
        }
      );
//    this.page.actionBarHidden = true;
  }
}
