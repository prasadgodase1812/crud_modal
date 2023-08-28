import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SubjectComponent } from './component/subject/subject.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SubjectComponent],
  imports:
   [
    BrowserModule,
     AppRoutingModule,
     ReactiveFormsModule,
     FormsModule,
     HttpClientModule,
     ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
