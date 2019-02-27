import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { StackComponent } from "./layouts/stack/stack.component";
import { FlexBoxComponent } from "./layouts/flexbox/flexbox.component";
import { GridLayoutComponent } from "./layouts/grid/grid.component";
import { AbsoluteLayoutComponent } from "./layouts/absolute/absolute.component";
import { EditChallengeComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { AuthenticationComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { AppRoutingModule } from "./app-routing.module";
import { ActionBarComponent } from "./shared/ui/action-bar/action-bar.component";
import { ChallengeTabComponent } from "./challenges/challenge-tab/challenge-tab.component";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent,
        FlexBoxComponent,
        GridLayoutComponent,
        AbsoluteLayoutComponent,
        EditChallengeComponent,
        AuthenticationComponent,
        TodayComponent,
        ActionBarComponent,
        ChallengeTabComponent
        
       
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
