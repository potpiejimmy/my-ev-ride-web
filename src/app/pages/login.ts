import { ViewChild, Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AppService } from '../services/app.service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit, AfterViewInit {

    @ViewChild('nameInputField') nameInputField;

    user: string;
    password: string;

    constructor(
        public app: AppService,
        public loginService: LoginService,
        public router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.dologin) this.autoLogin();
        })
    }

    ngAfterViewInit() {
        this.nameInputField.nativeElement.focus();
    }

    login() {
        this.app.clearMessages();
        this.loginService.login(this.user, this.password).then(result => this.onLoginCompleted(result));
    }

    loginGoogle() {
        window.location.href = environment.apiUrl+"login/google?returnurl="+encodeURIComponent(window.location.href+"?dologin=true");
    }

    autoLogin() {
        this.loginService.autoLogin().then(result => this.onLoginCompleted(result));
    }

    onLoginCompleted(result: any) {
        if (result) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/';
            // Redirect the user
            this.router.navigate([redirect]);
            this.app.setMessage('Login successful', 'You are now logged in as ' + this.loginService.loginToken.name, 'info');
        } else {
            this.app.setMessage('Login failed', 'Unknown user or wrong password.');
        }
    }
}