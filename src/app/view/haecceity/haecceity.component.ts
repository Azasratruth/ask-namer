import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-haecceity',
    templateUrl: './haecceity.component.html',
    styleUrls: ['./haecceity.component.css']
})
export class HaecceityComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle('Haecceity | Ask Namer');
        this.metaTagService.addTags([
            { name: 'description', content: 'Haecceity is a Self Developed Branding Methodology. We create brand personalities from the USP. Complete brand identity design with tech affiliations for prototyping, POCs, and MVPs.' },
        ]);
    }

    ngOnInit(): void { }

}
