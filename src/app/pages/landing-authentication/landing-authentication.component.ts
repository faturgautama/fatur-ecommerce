import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-landing-authentication',
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        ButtonModule,
        PasswordModule,
        InputTextModule,
        ReactiveFormsModule,
    ],
    templateUrl: './landing-authentication.component.html',
    styleUrl: './landing-authentication.component.scss'
})
export class LandingAuthenticationComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    FormState: 'login' | 'register' = 'login';

    FormAuthentication: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
    ) {
        this.FormAuthentication = this._formBuilder.group({
            nama: ['', [Validators.required]],
            email: ['', [Validators.required]],
            no_telepon: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }
}
