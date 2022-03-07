import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) {
    this.titleService.setTitle('Ask Namer | Naming Agency | 7x More Memorable Names | Haecceity');
    this.metaTagService.addTags([
      { name: 'description', content: 'We make your brand, startup, product name up to 7 times more memorable than a normal name, providing it a lifelong advantage.' },
      { name: 'keywords', content: 'brand name, startup name, business name, naming agency, branding' },
    ]);
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin);

    this.openingAnimation();
  }

  private openingAnimation() {
    gsap.to(window, { duration: 0, scrollTo: 0 });

    var revamp = gsap.timeline();

    revamp.from('.revamp', {
      y: -50,
      delay: 1,
      duration: 1.5,
      opacity: 0,
      ease: "expo.out"
    });

    var tl = gsap.timeline();
  }
}
