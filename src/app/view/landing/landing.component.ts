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
    ) {
        this.titleService.setTitle('Ask Namer | Naming Agency | 7x More Memorable Names | Haecceity');
        this.metaTagService.addTags([
            { name: 'description', content: 'We make your brand, startup, product name up to 7 times more memorable than a normal name, providing it a lifelong advantage.' },
            { name: 'keywords', content: 'brand name, startup name, business name, naming agency, branding' },
        ]);
    }

    ngOnInit(): void {
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
            duration: 1.5,
            opacity: 0,
            ease: "expo.out"
        }, '+=1.0');

        tl.from('.name-text', {
            scrollTrigger: '.name-text',
            duration: 3,
            opacity: 0,
            ease: "bounce.in"
        }, '-=1.5');


        tl.to('.name-img-border', {
            scrollTrigger: '.name-img-border',
            backgroundColor: 'rgba(10, 10, 10, 0.7)',
            padding: 20,
        }, '-=3.5');


        // var txt = gsap.timeline();

        // txt.to('#txt-1', {
        //     opacity: 0,
        //     delay: 1,
        //     duration: 0.5,
        // });

        // txt.to('#txt-2', {
        //     opacity: 1,
        //     duration: 0.5
        // });

        // txt.to('#txt-2', {
        //     opacity: 0,
        //     delay: 1,
        //     duration: 0.5,
        // });

        // txt.to('#txt-1', {
        //     opacity: 1,
        //     duration: 0.5
        // });

        // txt.repeat(-1);

        // var master = gsap.timeline();
        // master.add(tl).add(txt);

    }
}
