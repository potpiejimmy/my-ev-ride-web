import {Component} from '@angular/core';
import {AppComponent} from '../app';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <a class="footer-text-left" [routerLink]="['/about']">About</a>
                <span class="footer-text-right"><span class="ui-icon ui-icon-copyright"></span>  <span>All Rights Reserved</span></span>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}