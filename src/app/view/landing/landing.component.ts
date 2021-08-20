import { Component, OnInit } from '@angular/core';
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

    constructor(private gsapService: GsapService) { }


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

        tl.from('.name-img-border', {
            scrollTrigger: '.name-img-border',
            y: -100,
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
