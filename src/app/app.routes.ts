import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {MainComponent}  from './pages/main';
import {LoginComponent}  from './pages/login';
import {MyCarsComponent}  from './pages/mycars';
import {CampagneComponent} from "./pages/campagne";
import {TermsComponent} from './pages/terms';
import {PrivacyComponent} from './pages/privacy';
import {AboutComponent} from "./pages/about";

import {AuthGuard} from './services/authguard.service';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'my', component: MyCarsComponent, canActivate: [ AuthGuard ]},
    {path: 'support', component: CampagneComponent},
    {path: 'terms', component: TermsComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'about', component: AboutComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
