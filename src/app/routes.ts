import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {MainComponent}  from './pages/main';
import {LoginComponent}  from './pages/login';
import {NewCarComponent}  from './pages/newcar';

import {AuthGuard} from './services/authguard.service';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'new', component: NewCarComponent, canActivate: [ AuthGuard ]},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
