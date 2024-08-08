import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ExploreComponent } from './explore/explore.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'contact-us', component:FormComponent},
    {path: 'home', component:HomeComponent},
    {path: 'explore', component:ExploreComponent},
    {path: 'trip-planner', component: TripPlannerComponent},
    {path:'',component:HomeComponent}
]
