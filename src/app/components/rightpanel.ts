import {Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import {AppComponent} from '../app';
declare var jQuery: any;

@Component({
    selector: 'app-rightpanel',
    templateUrl: './rightpanel.html'
})
export class AppRightPanel {

    rightPanelMenuScroller: HTMLDivElement;
    
    @ViewChild('rightPanelMenuScroller') rightPanelMenuScrollerViewChild: ElementRef;

    constructor(public app: AppComponent) {}
    
    ngAfterViewInit() {
        this.rightPanelMenuScroller = <HTMLDivElement> this.rightPanelMenuScrollerViewChild.nativeElement;
        
        setTimeout(() => {
            jQuery(this.rightPanelMenuScroller).nanoScroller({flash:true});
        }, 10);
    }
    
    ngOnDestroy() {
        jQuery(this.rightPanelMenuScroller).nanoScroller({flash:true});
    }
}