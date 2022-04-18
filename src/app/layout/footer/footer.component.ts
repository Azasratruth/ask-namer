import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	public linkHoverOn(object, text) {
		gsap.to(object, {
			paddingTop: 8,
			paddingBottom: 8,
			paddingLeft: 35,
			paddingRight: 35,
			backgroundColor: '#fff',
			duration: 0.3
		});

		gsap.to(text, {
			color: '#000',
			duration: 0.3
		});
	}

	public linkHoverOff(object, text) {
		gsap.to(object, {
			padding: 0,
			backgroundColor: 'inherit',
			duration: 0.3
		});

		gsap.to(text, {
			color: '#fff',
			duration: 0.3
		});
	}

}
