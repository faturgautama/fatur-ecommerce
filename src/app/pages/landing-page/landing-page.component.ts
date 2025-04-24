import { Component } from '@angular/core';
import { LndBaseComponent } from "../../components/layout/landing/lnd-base/lnd-base.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        LndBaseComponent
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
