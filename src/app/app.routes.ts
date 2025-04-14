import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home",pathMatch:"full"},
    {path:'home',component:HomeComponent , title:'Home'},
    {path:'about',component:AboutComponent , title:'About'},
    {path:'products',component:ProductsComponent , title:'Products'},
    {path:'contact',component:ContactComponent , title:'Contact'},
];
