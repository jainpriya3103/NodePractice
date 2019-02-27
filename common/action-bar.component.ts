import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
declare var android: any;

@Component({
  selector: "ns-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.css"],
  moduleId: module.id
})
export class ActionBarComponent {
    
    @Input() title: string;
    @Input() showBackButton = true;

  constructor(private page: Page, private router: RouterExtensions) {}

  get canGoBack() { // get canGoBack is just a property no a method
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolBar = this.page.actionBar.nativeView;
      const backButton = androidToolBar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor("#171717"),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }
}
