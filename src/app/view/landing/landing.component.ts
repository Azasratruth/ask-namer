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

        this.titleService.setTitle('Ask Namer | Naming Agency | Haecceity');
        this.metaTagService.updateTag(
            { name: 'description', content: 'A naming agency with an intuitive approach. The identity of your brand starts with a name, so we make sure you get a headstart.' }
        );
        this.metaTagService.updateTag(
            { name: 'keywords', content: 'brand name, startup name, business name, naming agency, branding' }
        );


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
