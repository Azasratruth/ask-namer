import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public showNavscreen: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.openingAnimation();
    }


    public openingAnimation() {
        gsap.set('.navscreen', {
            x: '-100vw'
        });

        var tl = gsap.timeline();

        tl.from('.name-row-left', {
            x: '-100vw',
            duration: 1.5,
            ease: 'expo.out',
        }, '+=0.5');


        tl.from('.name-row-right', {
            x: '-80vw',
            opacity: 0,
            duration: 2,
            ease: 'expo.out',
        }, '+=0.1');


        // Logo
        tl.from('.logo-container', {
            y: '-5rem',
            duration: 1,
            ease: 'expo.out',
        }, '-=0.5');

        // Nav Toggle
        tl.from('.nav-close-container', {
            y: '5rem',
            duration: 1,
            ease: 'expo.out',
        }, '-=1');

    }


    toggleNavScreen() {
        console.log(this.showNavscreen);
        this.showNavscreen = !this.showNavscreen;

        var navsc = gsap.timeline();

        if (this.showNavscreen) {
            // open

            navsc.set('.navscreen', {
                opacity: 0,
                x: '100vw',
            });

            navsc.set('.nav-row', {
                x: '-50vw',
                opacity: 0,
            });

            navsc.set('body', {
                overflow: 'hidden'
            });

            // Screen
            navsc.to('.navscreen', {
                x: 0,
                opacity: 1,
                ease: 'SlowMo.in',
                duration: 0.4
            }, '+=0.4');

            // Each row comes in
            navsc.to('.nav-row', {
                opacity: 1,
                stagger: 0.15,
                x: '0',
                ease: 'SlowMo.in',
                duration: 0.4,
            }, '+=0.4');

            // Background Change
            navsc.to('.nav-row', {
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 35,
                paddingRight: 35,
                backgroundColor: 'rgba(250, 250, 250, 0.9)',
                color: 'color: var(--always-moving-block-black)',
                duration: 0.4,
            });


        }
        else {
            // close

            navsc.set('body', {
                overflowY: 'auto'
            });

            // Background change
            navsc.to('.nav-row', {
                padding: 0,
                backgroundColor: 'transparent',
                color: 'white',
                duration: 0.4,
            });

            // Each row goes out
            navsc.to('.nav-row', {
                opacity: 0,
                stagger: 0.15,
                x: '-50vw',
                ease: 'SlowMo.out',
                duration: 0.4,
            });

            // Screen goes out
            navsc.to('.navscreen', {
                x: '100vw',
                opacity: 0,
                ease: 'SlowMo.out',
                duration: 0.4
            });

        }

        // if (this.showNavscreen) this.disableScrolling();
        // else this.enableScrolling();
    }

    // disableScrolling() {
    //     var x = window.scrollX;
    //     var y = window.scrollY;
    //     window.onscroll = function () {
    //         window.scrollTo(x, y);
    //     };
    // }

    // enableScrolling() {
    //     window.onscroll = function () { };
    // }

    //   toggle() {
    //     this.show = !this.show;
    //     console.log(this.show);
    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  {
    // this.buttonName = "Hide";
    // console.log("hide");
    // }
    // else
    //   this.buttonName = "Show";
    //   }
}
