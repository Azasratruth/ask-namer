import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
    public currentStatus: boolean = false;
    public toDo: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.openingAnimation();
    }


    public openingAnimation() {

        gsap.set('.navscreen', {
            x: '-100vw'
        });

        gsap.set('.nav-close-container', {
            x: '5rem',
            opacity: 0
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

    toggleNavScreen(to_Do) {
        // console.log(this.currentStatus);

        var navsc = gsap.timeline();

        if (to_Do === 'open') {

            if (!this.currentStatus) {
                // open

                this.currentStatus = !this.currentStatus;

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
                navsc
                    .to('.nav-open-container', {
                        x: '5rem',
                        opacity: 0,
                        ease: 'SlowMo.out',
                        duration: 0.8
                    })
                    .to('.nav-close-container', {
                        x: 0,
                        opacity: 1,
                        ease: 'SlowMo.in',
                        duration: 0.8
                    }, '-=0.2')
                    .to('.navscreen', {
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

                // Background Change, made by chance. Delete custom link from below to remove the extra padding
                navsc.to('.nav-custom-link, .nav-row', {
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 35,
                    paddingRight: 35,
                    backgroundColor: 'rgba(250, 250, 250, 0.9)',
                    color: 'color: var(--always-moving-block-black)',
                    duration: 0.4,
                });


            }
        }
        if (to_Do === 'close') {

            if (this.currentStatus) {
                // close

                this.currentStatus = !this.currentStatus;

                navsc.set('body', {
                    overflowY: 'auto'
                });

                navsc
                    // move nav close out
                    .to('.nav-close-container', {
                        x: '5rem',
                        opacity: 0,
                        ease: 'SlowMo.out',
                        duration: 0.8
                    })
                    // move nav open in
                    .to('.nav-open-container', {
                        x: 0,
                        opacity: 1,
                        ease: 'SlowMo.in',
                        duration: 0.8
                    }, '-=0.2')
                    // Background change
                    .to('.nav-custom-link, .nav-row', {
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
        }
    }
}
