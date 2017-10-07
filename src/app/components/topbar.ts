import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from '../app';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html'
})
export class AppTopBarComponent {

    constructor(public app:AppComponent) {}

}