import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { VerifyOtpComponent } from './pages/auth/verify-otp/verify-otp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateLinkComponent } from './pages/item/create-link/create-link.component';
import { DetailComponent } from './pages/item/detail/detail.component';
import { ListComponent } from './pages/item/list/list.component';
import { SkuTabComponent } from './pages/item/sku-tab/sku-tab.component';
import { ShopDetailComponent } from './pages/landing-page/shop-detail/shop-detail.component';
import { ShopListComponent } from './pages/landing-page/shop-list/shop-list.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: ListComponent,
          },
          {
            path: 'detail',
            component: DetailComponent,
          },
          {
            path: 'create-link',
            component: CreateLinkComponent,
          },
          {
            path: 'sku-tab',
            component: SkuTabComponent,
          },
        ],
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
  },
  {
    path: 'shop-list',
    component: ShopListComponent,
  },
  {
    path: 'shop-detail/:id',
    component: ShopDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
