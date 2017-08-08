import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent}  from './pages/main.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
