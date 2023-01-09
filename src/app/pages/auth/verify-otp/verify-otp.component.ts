import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {
  otp = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // this.authService.login().subscribe((res: any) => {
    //   if (res.error) {
    //     alert(res.error);
    //   } else {
    //     // localStorage.setItem('token', res?.data?.token);
    //     // localStorage.setItem('id', res?.data?.user_info?.id);
    //     // this.router.navigate(['/dashboard']);
    //   }
    // });
  }

  onOtpChange(value: any) {
    this.otp = value;
  }
}
