import {enableProdMode, Inject, Injectable, InjectionToken, Injector, ReflectiveInjector} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {ReflectiveInjector_} from '@angular/core/src/di/reflective_injector';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
//
// export const DATASOURCE_CONFIG = new InjectionToken('Data Source Configuration');
// export const DATASOURCE_MAIN_CONFIG = new InjectionToken('Data Source Main Configuration');
//
//
// @Injectable()
// class DataSource {
//   data;
//   constructor(@Inject(DATASOURCE_CONFIG)private config) {
//     this.data = ' data from ' + config.sourceUrl;
//   }
// }
//
// @Injectable()
// class MockDataSource extends DataSource {
//   data = 'test data2';
// }
//
// @Injectable()
// class ComponentA {
//   message = 'welcome message';
//   constructor(@Inject(DataSource) private dataSource) {
//     console.log('>>> Getting ' + this.dataSource.data);
//   }
// }
//
// const providers = [  {
//   provide: DATASOURCE_MAIN_CONFIG,
//   useValue: {
//     sourceUrl: 'http://ssdfsdf.real.server/'
//   }
// },
//   DataSource ];
//
// const injector = ReflectiveInjector.resolveAndCreate(providers);
// const childInjector1 = ReflectiveInjector.resolveAndCreate([
//   {provide: DATASOURCE_CONFIG,
//   useExisting: DATASOURCE_MAIN_CONFIG},
//   ComponentA, DataSource], injector);
// const childInjector2 = ReflectiveInjector.resolveAndCreate([
//   {provide: DATASOURCE_CONFIG,
//     useValue: { sourceUrl : 'test source'}},
//   ComponentA, DataSource], injector);
//
// console.log(childInjector1.get(ComponentA));
// console.log(childInjector2.get(ComponentA));




