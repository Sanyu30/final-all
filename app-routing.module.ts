import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'Home',component: HomeComponent},
  {path:'Movies',component:MoviesComponent},
  {path:'Sign in',component:SignInComponent},
  {path:'Sign up',component:SignupComponent},
  {path:'Feedback',component:FeedbackComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
