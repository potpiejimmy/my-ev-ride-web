import {Component} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html'
})
export class AppTopbarComponent {

    constructor(public app: AppComponent) {}

}
