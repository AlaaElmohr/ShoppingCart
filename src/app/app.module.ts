import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import{SharedModule} from './shared.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';
import {AdminModule} from './admin/admin.module';
import {CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AdminModule,
    ShoppingCartModule,
    SharedModule,
    BrowserModule,
    SharedModule,
    ShoppingCartModule,
    AdminModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
