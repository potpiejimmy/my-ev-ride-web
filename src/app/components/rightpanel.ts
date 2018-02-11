import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {AppComponent} from '../app';
import {ScrollPanel} from 'primeng/primeng';

@Component({
    selector: 'app-rightpanel',
    templateUrl: 'rightpanel.html'
})
export class AppRightpanelComponent implements AfterViewInit {

    @ViewChild('scrollRightPanel') rightPanelMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppComponent) {}

    ngAfterViewInit() {
    }
}
