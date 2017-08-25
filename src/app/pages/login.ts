import { ViewChild, Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AppService } from '../services/app.service';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent implements AfterViewInit {

    @ViewChild('nameInputField') nameInputField;

    user: string;
    password: string;

    constructor(
        public app: AppService,
        public loginService: LoginService,
        public router: Router) {
    }

    ngAfterViewInit() {
        this.nameInputField.nativeElement.focus();
    }

    login() {
        this.app.clearMessages();
        this.loginService.login(this.user, this.password).then(result => {
            if (result) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/';
                // Redirect the user
                this.router.navigate([redirect]);
            } else {
                this.app.setMessage('Login failed', 'Unknown user or wrong password.');
            }
        });
    }
}