import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { GsapService } from 'src/app/service/gsap.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SlowMo } from "gsap/EasePack";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
        private gsapService: GsapService
    ) { }


    ngOnInit(): void {

        // <!-- Primary Meta Tags -->
        this.titleService.setTitle('Ask Namer | Naming Agency | Haecceity');
        this.metaTagService.updateTag({
            name: 'description', content: 'We make your brand, startup, product name up to 7 times easier to remember than a normal name, providing it a lifelong advantage.'
        });
        this.metaTagService.updateTag({
            name: 'keywords', content: 'brand name, startup name, business name, naming agency, branding'
        });

        // <meta property="og:type" content="website">
        // <meta property="og:url" content="https://metatags.io/">
        // <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
        // <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
        // <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

        // <!-- Open Graph / Facebook -->
        this.metaTagService.updateTag({
            name: 'og:type', content: 'website'
        });
        this.metaTagService.updateTag({
            name: 'og:url', content: 'https://asknamer.com/'
        });
        this.metaTagService.updateTag({
            name: 'og:title', content: 'Ask Namer | Naming Agency | Haecceity'
        });
        this.metaTagService.updateTag({
            name: 'og:description', content: 'We make your brand, startup, product name up to 7 times easier to remember than a normal name, providing it a lifelong advantage.'
        });
        this.metaTagService.updateTag({
            name: 'og:image', content: 'https://asknamer.com/assets/images/meta.png'
        });

        // <!-- Twitter -->
        // <meta property="twitter:card" content="summary_large_image">
        // <meta property="twitter:url" content="https://metatags.io/">
        // <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
        // <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
        // <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

        // <!-- Twitter -->
        this.metaTagService.updateTag({
            name: 'twitter:card', content: 'summary_large_image'
        });
        this.metaTagService.updateTag({
            name: 'twitter:url', content: 'https://asknamer.com/'
        });
        this.metaTagService.updateTag({
            name: 'twitter:title', content: 'Ask Namer | Naming Agency | Haecceity'
        });
        this.metaTagService.updateTag({
            name: 'twitter:description', content: 'We make your brand, startup, product name up to 7 times easier to remember than a normal name, providing it a lifelong advantage.'
        });
        this.metaTagService.updateTag({
            name: 'twitter:image', content: 'https://asknamer.com/assets/images/meta.png'
        });



        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(ScrollTrigger);

        this.openingAnimation();

    }

    private openingAnimation() {
        // const animation = this.gsapService;
        // const object = '.name-img-cont';

        // ease: "power7.inOut"
        // ease: 'slow (0.9, 0.9, false)'
        // ease: 'expo.out'
        // ease: "power7.inOut"
        // ease: 'slow (0.9, 0.9, false)'

        gsap.to(window, { duration: 0, scrollTo: 0 });

        var tl = gsap.timeline();

        tl.from('.name-img-border, .revamp', {
            scrollTrigger: '.name-img-border',
            y: -50,
            duration: 2.5,
            opacity: 0,
            ease: "expo.out"
        }, '+=1.0');

        tl.from('.name-text', {
            scrollTrigger: '.name-text',
            duration: 5,
            opacity: 0,
            ease: "bounce.in"
        }, '-=1.5');


        tl.to('.name-img-border', {
            scrollTrigger: '.name-img-border',
            backgroundColor: 'rgba(10, 10, 10, 0.7)',
            padding: 20,
        }, '-=3.5');


    }


    // public cardHoverOn(object) {
    // }

    // public cardHoverOff(object) {
    // }
}
