import { Component, Input } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"],
  moduleId: module.id
})

export class CurrentChallengeComponent {
  
  constructor(private router: RouterExtensions) { }
  // @Input() challenges

  // onItemTap(args: ItemEventData) {
  //   console.log(args);
  // }
  onTap() {
    this.router.navigate(['/edit-challenge'], {
    transition: { name: 'slideLeft' } });
  }
  //we are changing button color for android only
  
}
