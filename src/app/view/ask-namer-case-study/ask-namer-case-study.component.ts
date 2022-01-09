import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-ask-namer-case-study',
    templateUrl: './ask-namer-case-study.component.html',
    styleUrls: ['./ask-namer-case-study.component.css']
})
export class AskNamerCaseStudyComponent implements OnInit {

    show = false;

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('About Me | Ask Namer');
        this.metaTagService.updateTag(
            { name: 'description', content: '' }
        );

    }

}
