import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html'
})
export class AppTopbarComponent {

    constructor(public app: AppService) {}
}
