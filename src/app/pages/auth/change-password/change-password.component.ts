import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  hide1 = false;
  hide2 = false;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPass: ['', Validators.required],
      },
      { validator: this.checkIfMatchingPasswords('password', 'confirmPass') }
    );
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  onSubmit() {
    console.log('12', this.form.controls['confirmPass'].errors);


    // this.authService.login(this.form.value).subscribe((res: any) => {
    //   if (res.error) {
    //     alert(res.error);
    //   } else {
    //     // localStorage.setItem('token', res?.data?.token);
    //     // localStorage.setItem('id', res?.data?.user_info?.id);
    //     // this.router.navigate(['/dashboard']);
    //   }
    // });
  }
}
