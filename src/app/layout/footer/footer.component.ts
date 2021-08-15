import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
// import { GsapService } from 'src/app/service/gsap.service';
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        this.animation();
    }

    private openingAnimation() {
        // const animation = this.gsapService;
    }

    private animation() {

        var footer = gsap.timeline();

        // footer.from('.custom-footer, .custom-footer-bottom', {

        //     scrollTrigger: {
        //         trigger: '.custom-footer',
        //         pin: true,
        //         // start: "top top",
        //         start: "top bottom",
        //         // end: "bottom bottom",
        //         markers: true,
        //         toggleActions: "restart pause reverse pause"
        //     },

        //     opacity: 0,
        //     y: '100%',
        //     duration: 2
        // });

        // footer.from('.custom-footer-bottom', {
        //     // scrollTrigger: '.custom-footer-bottom',
        //     opacity: 0,
        //     y: '100%',
        //     duration: 2
        // });
    }

    public linkHoverOn(object) {
        gsap.to(object, {
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 35,
            paddingRight: 35,
            backgroundColor: '#fff',
            color: '#000',
            duration: 0.3
        });
    }

    public linkHoverOff(object) {
        gsap.to(object, {
            padding: 0,
            color: '#fff',
            backgroundColor: 'inherit',
            duration: 0.3
        });
    }

}
