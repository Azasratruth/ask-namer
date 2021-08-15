import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './view/landing/landing.component';
import { AboutMeComponent } from './view/about-me/about-me.component';
import { ContactComponent } from './view/contact/contact.component';
import { PageAnimationComponent } from './feature/page-animation/page-animation.component';
import { AskVoidComponent } from './view/ask-void/ask-void.component';
import { TermsAndAgreementComponent } from './view/terms-and-agreement/terms-and-agreement.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ask-void', component: AskVoidComponent },
    { path: 'terms-and-agreement', component: TermsAndAgreementComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LandingComponent,
        AboutMeComponent,
        ContactComponent,
        PageAnimationComponent,
        AskVoidComponent,
        TermsAndAgreementComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [NavbarComponent, AppComponent, FooterComponent]
})
export class AppModule { }
