import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { routes } from './app.routes';
import { provideStateManagement } from './store/store.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStateManagement(),
        provideHttpClient(),
        provideAnimations(),
        MessageService,
        ConfirmationService,
    ]
};
