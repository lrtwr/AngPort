import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';


export let APP_CONFIG = new InjectionToken<AppConfigClass>('app.config');


export class AppConfigClass {
  production: boolean;
  apiEndpoint: string;
  }

export const AppConfig: AppConfigClass = environment;

@NgModule({
  providers: [{
    provide: AppConfig,
    useValue: AppConfig
  }]
})

export class AppConfigModule { }
