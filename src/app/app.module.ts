import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import {AuthService} from '@app/shared/services/auth.service';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaIgrejasComponent } from './@theme/components/lista-igrejas/lista-igrejas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule, NbUserModule, NbSelectModule, NbActionsModule, NbSearchModule, NbSpinnerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { IgrejaComponent } from './pages/igreja/igreja.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ListaIgrejasComponent,
    IgrejaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        GraphQLModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'default'}),
        NbLayoutModule,
        NbEvaIconsModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbSidebarModule.forRoot(),
        NbCardModule,
        NbMenuModule.forRoot(),
        NbUserModule,
        NbSelectModule,
        NbActionsModule,
        NbSearchModule,
        NbSpinnerModule,
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
