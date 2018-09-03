import { Injectable }    from '@angular/core';
import { Router } from '@angular/router';
import { Message }  from 'primeng/primeng';
import { LoginService } from './login.service';

@Injectable()
export class AppService {

    messages: Message[];

    constructor(
        public loginService: LoginService,
        private router: Router) {
    }

    setMessage(summary: string, detail: string, severity: string = "error") {
        setTimeout(() => {
            this.messages = [];
            this.messages.push({severity: severity, summary: summary, detail: detail});
        },0);
    }

    clearMessages() {
        setTimeout(() => {
            this.messages = [];
        },0);
    }

    logout(): void {
        this.loginService.logout();
        this.clearMessages();
        this.router.navigate(['/']);
    }

    // -- specifics

    priceFormatted(value: number, currency: string): string {
        return value.toLocaleString([], {
            style: 'currency',
            currency: currency,
        })
    }
}
