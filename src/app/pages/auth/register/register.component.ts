import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { map, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = false;
  form!: FormGroup;

  provinces$!: Observable<any>;
  district$!: Observable<any>;
  ward$!: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required],
      ward: ['', Validators.required],
      address: ['', Validators.required],
      policy: [false, Validators.required],
    });

    this.provinces$ = this.authService
      .getLocation({ level: 1 })
      .pipe(map((data: any) => data?.data));
  }

  getLocations(level: number, parent_key: number) {
    return this.authService
      .getLocation({ level, parent_key })
      .pipe(map((data: any) => data?.data));
  }

  onChangeProvince(event: any) {
    const value = JSON.parse(event?.target.value);
    this.form.get('province')?.setValue(value.name);
    this.district$ = this.getLocations(2, value.key);
    this.ward$ = of([]);
  }

  onChangeDistrict(event: any) {
    const value = JSON.parse(event?.target.value);
    this.form.get('district')?.setValue(value.name);
    this.ward$ = this.getLocations(3, value.key);
  }

  onSubmit() {
    const params = {
      username: this.form.value.username,
      first_name_js: {
        vi: this.form.value.firstName,
        en: this.form.value.firstName,
      },
      last_name_js: {
        vi: this.form.value.lastName,
        en: this.form.value.lastName,
      },
      email: this.form.value.email,
      phone_number: this.form.value.phone,
      gender_js: {
        vi: this.form.value.gender === 'Male' ? 'Nam' : 'Nữ',
        en: this.form.value.gender,
      },
      birthday: dayjs(this.form.value.dob).toISOString,
      password: this.form.value.password,
      object_system_key: 'jf_alphacom_seller',
      address_info: {
        street_address_js: {
          vi: this.form.value.address,
          en: this.form.value.address,
        },
        extract_address: {
          city_province: '001',
          district_town: '002',
          ward_commune: '003',
        },
        exact_address_js: {
          vi: '99 B2 Viet Nam đường Hồ Chí Minh',
          en: '99 B2 Viet Nam Ho Chi Minh street',
        },
        geo: null,
      },
    };
    this.authService.register(params).subscribe((res: any) => {
      if (res.error) {
        alert(res.error);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
