import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-lnd-navbar',
    standalone: true,
    imports: [
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,

    ],
    templateUrl: './lnd-navbar.component.html',
    styleUrl: './lnd-navbar.component.scss'
})
export class LndNavbarComponent {

}
