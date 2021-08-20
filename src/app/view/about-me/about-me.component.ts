import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(ScrollTrigger);

        this.openingAnimation();
    }

    private openingAnimation() {

        gsap.to(window, { duration: 0, scrollTo: 0 });

        var tl = gsap.timeline();

        tl.from('.name-img-border', {
            scrollTrigger: '.name-img-border',
            y: -100,
            duration: 2.5,
            opacity: 0,
            ease: "expo.out"
        }, '+=1.0');


        tl.to('.name-img-border', {
            scrollTrigger: '.name-img-border',
            backgroundColor: 'rgba(10, 10, 10, 0.7)',
            padding: 20,
        }, '-=1.5');


    }


}
