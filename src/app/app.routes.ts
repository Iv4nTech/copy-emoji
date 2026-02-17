import { Routes } from '@angular/router';
import { AllApi } from './all-api/all-api.component';
import { Home } from './home/home.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { EmojisFavsComponent } from './emojis-favs/emojis-favs.component';

export const routes: Routes = [
    {
    path :'',
    component:  Home,
    },

    {
        path: 'all/emojis',
        component: AllApi,
    },

    {
        path: 'detail/emoji/:name',
        component: AllApi 
    },

    {
        path: 'contact',
        component: FormContactComponent
    },
    {
        path: 'emojis/favs',
        component: EmojisFavsComponent
    }
];
