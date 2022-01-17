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
    ) {
        this.titleService.setTitle('Case Study - Ask Namer | Ask Namer');
        this.metaTagService.addTags([
            { name: 'description', content: 'The break down of the values of the name Ask Namer.' },
        ]);
    }

    ngOnInit(): void { }

}
