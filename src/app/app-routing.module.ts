import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import{ ContactComponent} from './contact/contact.component';
import {EducationComponent} from './education/education.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent} from './home/home.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [

  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path : 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path : 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path : 'skill',
    pathMatch: 'full',
    component: SkillComponent
  },
  {
    path : 'education',
    pathMatch: 'full',
    component: EducationComponent
  },
 {
    path : 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
