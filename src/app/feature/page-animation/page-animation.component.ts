import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

@Component({
    selector: 'app-page-animation',
    templateUrl: './page-animation.component.html',
    styleUrls: ['./page-animation.component.css']
})
export class PageAnimationComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        gsap.registerPlugin(ScrollToPlugin);
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

        var page = gsap.timeline();

        // Initial 
        page.from('.page-left', {
            x: '-25vw',
            duration: 8,
            delay: 3.5,
            ease: 'SlowMo.out'
        });

        // Repeated
        page.to('.page-left', {
            x: '50vw',
            duration: 18,
            delay: 2,
            // ease: 'power2.inOut',
            ease: 'SlowMo.inOut',
            yoyo: true,
            repeat: -1,
            repeatDelay: 2
        });
    }


}
