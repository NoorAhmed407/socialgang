import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PostCardComponent } from './post-card/post-card.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import {MatCardModule} from '@angular/material/card';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatBadgeModule} from '@angular/material/badge';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthHeaderComponent,
    PostCardComponent,
    PostsListComponent,
    AppHeaderComponent,
    ProfilePageComponent,
    HomePageComponent,
    NotificationsPageComponent,
    NotificationCardComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgpImagePickerModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule, 
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
