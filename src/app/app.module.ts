import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialRollupModule } from './material-rollup.module';
import { TokenInterceptor } from './services/token.interceptor';

/* Code Scavenger Hunt #1: Import components */

const appRoutes: Routes = [
/* Code Scavenger Hunt #2: Route components
    Root route '' should be the AppComponent
    Search route '/search' should be the SearchComponent
*/
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialRollupModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [/* Code Scavenger Hunt #3: declare components */
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class AppModule {
  constructor() { }
}
