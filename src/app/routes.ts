import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent}  from './pages/main';
import {NewCarComponent}  from './pages/newcar';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'new', component: NewCarComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
