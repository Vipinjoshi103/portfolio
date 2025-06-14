import { Routes,  } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path: 'Contact-us',component:ContactComponent},
   {path:'home',component:HomeComponent},
    {path:'**',component: PagenotfoundComponent}
];