/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app';
import { AppTopbarComponent } from './components/topbar';
import { AppRightpanelComponent} from './components/rightpanel';
import { AppInlineProfileComponent } from './components/profile';
import { AppFooterComponent } from './components/footer';
import { AppBreadcrumbComponent } from './components/breadcrumb';
import { AppMenuComponent, AppSubMenuComponent } from './components/menu';
import { BreadcrumbService } from './components/breadcrumb.service';
import { ScrollPanel } from 'primeng/primeng';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        declarations: [ AppComponent,
                AppTopbarComponent,
                AppMenuComponent,
                AppSubMenuComponent,
                AppFooterComponent,
                AppBreadcrumbComponent,
                AppInlineProfileComponent,
                AppRightpanelComponent,
                ScrollPanel
            ],
        providers: [BreadcrumbService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
