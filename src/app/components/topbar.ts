import {Component} from '@angular/core';
import {AppComponent} from '../app.component';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html'
})
export class AppTopbarComponent {

    constructor(public app: AppComponent,
                public loginService: LoginService) {}

}
