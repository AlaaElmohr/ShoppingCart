import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import{SharedModule} from './../shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
        { path: '', component:HomeComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
