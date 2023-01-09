import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ListComponent } from './pages/item/list/list.component';
import { DetailComponent } from './pages/item/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateLinkComponent } from './pages/item/create-link/create-link.component';
import { SkuTabComponent } from './pages/item/sku-tab/sku-tab.component';
import { ShopListComponent } from './pages/landing-page/shop-list/shop-list.component';
import { ShopDetailComponent } from './pages/landing-page/shop-detail/shop-detail.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopDetailItemComponent } from './components/shop-detail-item/shop-detail-item.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Interceptor } from './services/intercepter';
import { MatRadioModule } from '@angular/material/radio';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
import { VerifyOtpComponent } from './pages/auth/verify-otp/verify-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailComponent,
    DashboardComponent,
    UserComponent,
    CreateLinkComponent,
    SkuTabComponent,
    ShopListComponent,
    ShopDetailComponent,
    ShopItemComponent,
    ShopDetailItemComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyOtpComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgOtpInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
