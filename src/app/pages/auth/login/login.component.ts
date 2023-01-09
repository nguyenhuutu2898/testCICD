import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = false;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['my_acc', Validators.required],
      password: [
        'Aa12345678910Aa12345678910Aa12345678910Aa12345678910Aa1234545678',
        Validators.required,
      ],
    });
  }

  onLogin() {
    this.authService.login(this.form.value).subscribe((res: any) => {
      if (res.error) {
        alert(res.error);
      } else {
        localStorage.setItem('token', res?.data?.token);
        localStorage.setItem('id', res?.data?.user_info?.id);

        this.router.navigate(['/dashboard']);
      }
    });
  }
}
