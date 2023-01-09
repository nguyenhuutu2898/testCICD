import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.forgotPassword(this.form.value).subscribe((res: any) => {
      console.log('res', res)
      if (res.error) {
        alert(res.error);
      } else {
        // localStorage.setItem('token', res?.data?.token);
        // localStorage.setItem('id', res?.data?.user_info?.id);

        // this.router.navigate(['/dashboard']);
      }
    });
  }
}
