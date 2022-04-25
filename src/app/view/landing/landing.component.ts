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
		this.titleService.setTitle('Ask Namer | Leading Research-Oriented Naming Agency');
		this.metaTagService.addTags([
			{ name: 'description', content: 'At Ask Namer, we create memorable, evocative, and engaging names for companies, brands, and products.' },
			{ name: 'keywords', content: 'brand name, startup name, business name, naming agency, branding' },
		]);
	}

	ngOnInit(): void {
		gsap.registerPlugin(ScrollToPlugin);

		this.openingAnimation();
	}

	private openingAnimation() {
		gsap.to(window, { duration: 0, scrollTo: 0 });
	}
}
