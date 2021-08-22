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
import { NomenclatureComponent } from './view/nomenclature/nomenclature.component';
import { NamesComponent } from './view/names/names.component';
import { HaecceityComponent } from './view/haecceity/haecceity.component';
import { NomenclatureLandingComponent } from './view/nomenclature-landing/nomenclature-landing.component';
import { HaecceityLandingComponent } from './view/haecceity-landing/haecceity-landing.component';
import { NamesLandingComponent } from './view/names-landing/names-landing.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ask-void', component: AskVoidComponent },
    { path: 'names', component: NamesComponent },
    { path: 'nomenclature', component: NomenclatureComponent },
    { path: 'haecceity', component: HaecceityComponent },
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
        TermsAndAgreementComponent,
        NomenclatureComponent,
        NamesComponent,
        HaecceityComponent,
        NomenclatureLandingComponent,
        HaecceityLandingComponent,
        NamesLandingComponent,
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