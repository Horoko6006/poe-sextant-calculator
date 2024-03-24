import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SextantListComponent } from './app/sextants/sextant-list.component';

bootstrapApplication(SextantListComponent, appConfig)
  .catch((err) => console.error(err));
