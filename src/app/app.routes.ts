import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./pages/landing-page/landing-page.component')).LandingPageComponent,
        data: {
            title: 'Landing Page'
        }
    }
];
