import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(),
      importProvidersFrom([
          HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
      ]),
      provideRouter(routes)]
};
