import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent}  from './pages/main.component';
import {NewCarComponent}  from './pages/newcar.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'new', component: NewCarComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
