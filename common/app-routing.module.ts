import { NgModule } from "@angular/core";
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { AuthenticationComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { EditChallengeComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { ChallengeTabComponent } from "./challenges/challenge-tab/challenge-tab.component";

const routes : Routes = [
    { path: '', component: AuthenticationComponent },
    { path: 'edit-challenge', component: EditChallengeComponent },
    {
        path: 'challenge', component: ChallengeTabComponent, 
        children: [
            { path: 'today', component: TodayComponent, outlet:'today'},
            { path: 'current-challenge', component: CurrentChallengeComponent, outlet:'currentChallenge' }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule{

}