import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared.module';
import { FilmeComponent } from './components/filme/filme.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRoleComponent } from './components/userRole/userRole.component';
import { UsersComponent } from './components/users/users.component';
import { ComentariiComponent } from './components/comentarii/comentarii.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeComponent,
    UserRoleComponent,
    UsersComponent,
    ComentariiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
