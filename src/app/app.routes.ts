import { Routes } from '@angular/router';
import { AllApi } from './all-api/all-api';
import { Home } from './home/home.component';

export const routes: Routes = [
    {
    path :'',
    component:  Home,
    },

    {
        path: 'all/emojis',
        component: AllApi,
    }
];
