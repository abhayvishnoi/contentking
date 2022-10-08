import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  type: 'login' | 'signup' | 'reset' | 'resetForm' = 'login';
  serverMessage: string = '';
  submitted: boolean = false;
  msgClass: boolean = false;
  token: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    let urlroute = this.route.snapshot.url;
    console.log(urlroute, this.token);
    if (this.authService.loggedIn()) {
      this.router.navigate(['dashboard']);
    } else {
      this.authForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.minLength(8)]],
      });
      if (urlroute[0].toString() === 'reset') {
        this.token = route.snapshot.paramMap.get('token')!;
        console.log(this.token);
        if (this.token.length) {
          this.type = 'resetForm';
        }
      }
    }
  }
  ngOnInit(): void {
    this.authForm.valueChanges.subscribe((res) => (this.serverMessage = ''));
  }
  changeType(val: any) {
    this.type = val;
    this.serverMessage = '';
    this.submitted = false;
    this.msgClass = false;
    // if (val === 'login' && this.resetForm) {
    //   this.router.navigateByUrl('/auth');
    //   this.location.go('auth');
    // }
  }
  get email() {
    return this.authForm.get('email');
  }
  get password() {
    return this.authForm.get('password');
  }
  get passwordConfirm() {
    return this.authForm.get('passwordConfirm');
  }
  get isPasswordConfirmed(): Boolean {
    if (this.isSignup) {
      return this.password!.value === this.passwordConfirm!.value;
    }
    return true;
  }
  get isSignup() {
    return this.type === 'signup';
  }
  get isLogin() {
    return this.type === 'login';
  }
  get isReset() {
    return this.type === 'reset';
  }
  get resetForm() {
    return this.type === 'resetForm';
  }

  handleResponse = (res: any) => {
    this.serverMessage = res.message;
    this.msgClass = true;
    if (!this.resetForm && !this.isReset) {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    }
    this.submitted = false;
  };

  signInWithEmailAndPassword = async (email: string, password: string) => {
    await this.authService.login(email, password).subscribe(
      (res) => this.handleResponse(res),
      (err) => {
        this.serverMessage = err.error.message;
        this.submitted = false;
      }
    );
  };
  createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    await this.authService.signup(email, password, passwordConfirm).subscribe(
      (res) => {
        this.serverMessage = res.message;
        this.handleResponse(res);
      },
      (err) => {
        this.serverMessage = err.error.message;
        this.submitted = false;
      }
    );
  };
  sendPasswordResetEmail = async (email: string) => {
    await this.authService.resetPassword(email).subscribe(
      (res) => {
        this.serverMessage = res.message;
        this.handleResponse(res);
      },
      (err) => {
        this.serverMessage = err.error.message;
        this.submitted = false;
      }
    );
  };
  updatePassword = async (password: string) => {
    await this.authService.updatePassword(password, this.token).subscribe(
      (res) => {
        this.serverMessage = res.message;
        this.handleResponse(res);
      },
      (err) => {
        this.serverMessage = err.error.message;
        this.submitted = false;
      }
    );
  };

  onFormSubmit = async () => {
    const email = this.email!.value.toLowerCase();
    const password = this.password!.value;
    const passwordConfirm = this.passwordConfirm!.value;
    console.log(email, password, passwordConfirm);

    try {
      if (this.isLogin) {
        this.submitted = true;
        await this.signInWithEmailAndPassword(email, password);
      }
      if (this.isSignup) {
        this.submitted = true;
        await this.createUserWithEmailAndPassword(
          email,
          password,
          passwordConfirm
        );
      }
      if (this.isReset) {
        this.submitted = true;
        await this.sendPasswordResetEmail(email);
      }
      if (this.resetForm) {
        this.submitted = true;
        await this.updatePassword(password);
      }
    } catch (error: any) {
      this.serverMessage = error;
      // console.log(error);
    }
  };
}
