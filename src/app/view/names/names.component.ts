import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { gsap } from 'gsap';

@Component({
    selector: 'app-names',
    templateUrl: './names.component.html',
    styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle('Names aka Portfolio | Ask Namer');
        this.metaTagService.addTags([
            { name: 'description', content: 'The names in my portfolio. Names ranging from startups, products, brands, magazines, and even fishes.' },
        ]);
    }

    ngOnInit(): void {
    }
}
