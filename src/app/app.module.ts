import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {provideNgxMask} from 'ngx-mask';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {HeaderComponent} from './ui/header/header.component';
import {NavComponent} from './ui/nav/nav.component';
import {NavItemComponent} from './ui/nav/nav-item/nav-item.component';
import {FakeMemberRequestInterceptor} from './shared/interceptors/fake-member-request.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    NavItemComponent,
  ],
  providers: [
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeMemberRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
