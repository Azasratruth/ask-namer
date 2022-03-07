import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

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
import { AskNamerCaseStudyComponent } from './view/ask-namer-case-study/ask-namer-case-study.component';
import { AskNamerCaseStudyLandingComponent } from './view/ask-namer-case-study-landing/ask-namer-case-study-landing.component';
import { TestimonialsComponent } from './view/testimonials/testimonials.component';
import { ContactLandingComponent } from './view/contact-landing/contact-landing.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService, Analytics } from '@angular/fire/analytics';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { BlogsComponent } from './view/blogs/blogs.component';
import { BlogWhatsInABrandNameComponent } from './view/blog-whats-in-a-brand-name/blog-whats-in-a-brand-name.component';
import { FactsAboutSoundSymbolismComponent } from './view/facts-about-sound-symbolism/facts-about-sound-symbolism.component';
import { CaseStudyTemplateComponent } from './view/case-study-template/case-study-template.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'connect', component: ContactComponent },
    { path: 'names', component: NamesComponent },
    { path: 'nomenclature', component: NomenclatureComponent },
    { path: 'haecceity', component: HaecceityComponent },
    { path: 'terms-and-agreement', component: TermsAndAgreementComponent },
    { path: 'ask-namer-case-study', component: AskNamerCaseStudyComponent },
    { path: 'brief-blogs', component: BlogsComponent },
    { path: 'brief-blogs/whats-in-a-brand-name', component: BlogWhatsInABrandNameComponent },
    { path: 'brief-blogs/the-sound-of-success-how-brands-can-benefit-from-phonetics', component: FactsAboutSoundSymbolismComponent }
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
        AskNamerCaseStudyComponent,
        AskNamerCaseStudyLandingComponent,
        TestimonialsComponent,
        ContactLandingComponent,
        BlogsComponent,
        BlogWhatsInABrandNameComponent,
        FactsAboutSoundSymbolismComponent,
        CaseStudyTemplateComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled'
        }),
        CarouselModule.forRoot(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideMessaging(() => getMessaging()),
        providePerformance(() => getPerformance()),
        provideRemoteConfig(() => getRemoteConfig()),
        provideStorage(() => getStorage())
    ],
    providers: [
    ],
    bootstrap: [NavbarComponent, AppComponent, FooterComponent]
})

export class AppModule { }
