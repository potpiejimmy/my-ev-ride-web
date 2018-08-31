import {NgModule}      from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}    from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
//import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routes';
import {environment} from '../environments/environment';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// PrimeNG
import {AccordionModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CaptchaModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SpinnerModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {CardModule} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/primeng';

// App
import {AppComponent}  from './app.component';
import {AppTopbarComponent}  from './components/topbar';
import {AppFooterComponent}  from './components/footer';

// app specifics
import { AgmCoreModule } from '@agm/core';
import { LocalStorageModule } from 'angular-2-local-storage';

// my services
import { AuthGuard } from './services/authguard.service';
import { AppService } from './services/app.service';
import { LoginService }  from './services/login.service';
import { AuthHttp }  from './services/authhttp.service';
import { CarConfig }  from './services/carconfig.service';
import { AssetsService }  from './services/api/assets.service';

// my components
import {MainComponent}  from './pages/main';
import {LoginComponent}  from './pages/login';
import {MyCarsComponent}  from './pages/mycars';
import {EditCarComponent}  from './components/editcar';
import {ChooseLocationComponent}  from './components/chooselocation';
import {CampagneComponent} from "./pages/campagne";
import {AboutComponent} from "./pages/about";

@NgModule({
    imports: [
        BrowserModule,
        environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
        FormsModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        // Angular Material:
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        // PrimeNG:
        AccordionModule,
        AutoCompleteModule,
        ButtonModule,
        CaptchaModule,
        CheckboxModule,
        ConfirmDialogModule,
        FieldsetModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        PaginatorModule,
        PanelModule,
        PasswordModule,
        ProgressBarModule,
        RadioButtonModule,
        ScrollPanelModule,
        SpinnerModule,
        TableModule,
        TabMenuModule,
        ToolbarModule,
        CardModule,
        // app specifics
        LocalStorageModule.withConfig({ prefix: 'myevride', storageType: 'localStorage' }), // or sessionStorage
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyDGXLEg3ydrqj3q0CjC-KK5P4q5G2Udmn0", // for my-ev-ride, restricted
            libraries: ["places"]
          }),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        // my components
        MainComponent,
        LoginComponent,
        MyCarsComponent,
        CampagneComponent,
        AboutComponent,
        EditCarComponent,
        ChooseLocationComponent
    ],
    providers: [
//       {provide: LocationStrategy, useClass: HashLocationStrategy},
       AuthGuard, AppService, LoginService, AuthHttp, CarConfig,
    /* API     */ AssetsService,
    /* PrimeNG */ ConfirmationService
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
