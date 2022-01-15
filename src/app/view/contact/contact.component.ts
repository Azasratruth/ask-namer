import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) { }

    ngOnInit(): void {

        this.titleService.setTitle('Connect | Naming Agency | Ask Namer');
        this.metaTagService.updateTag({
            name: 'description', content: 'Feel free to reach out to me regarding any queries, collaborations, or a discussion at asknamer@outlook.com.'
        });

    }

}
