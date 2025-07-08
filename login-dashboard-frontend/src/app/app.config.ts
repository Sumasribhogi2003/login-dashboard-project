import { ApplicationConfig } from '@angular/core';                  // ✅ correct
import { provideHttpClient } from '@angular/common/http';          // ✅ also correct
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()  // ✅ Enables HttpClient in standalone Angular
  ]
};
