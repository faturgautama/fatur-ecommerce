import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './store/store.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        StateModule,
        RouterOutlet,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'fatur-ecommerce';
}
