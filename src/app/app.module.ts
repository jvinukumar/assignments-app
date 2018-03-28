import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentAppComponent } from './student-app/student-app.component';
import { StudentService } from './services/student.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { StudentDataComponent } from './student-data/student-data.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthenticatePageComponent } from './authenticate-page/authenticate-page.component';
import { AuthService } from './services/AuthService';


const appRoutes: Routes=[
{ path:'#',component:HeaderComponent},
{ path:'data',component: StudentDataComponent},
{ path:'form',  component:StudentFormComponent  },
{ path:'app', canActivate:[AuthService], component:StudentAppComponent  },
{ path: 'edit/:id', component: EditPageComponent},
{ path: 'authpage', component: AuthenticatePageComponent}
// { path:'',component: }

]




@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentAppComponent,
    HeaderComponent,
    EditPageComponent,
    AuthenticatePageComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule,
    RouterModule.forRoot(appRoutes)
   
  ],

  providers: [StudentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
