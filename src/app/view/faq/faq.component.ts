import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css', './../blogs/blog-template.css']
})
export class FaqComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle("FAQ | Naming Agency | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: 'Why should I pay for a name? What is your proces and pricing? How to overcome the culture gap in branding?' },
        ]);
    }

    ngOnInit(): void {
    }

}
