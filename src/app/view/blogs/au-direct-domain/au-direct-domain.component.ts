import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-au-direct-domain',
    templateUrl: './au-direct-domain.component.html',
    styleUrls: ['./au-direct-domain.component.css, ./../../blog-template.css']
})
export class AuDirectDomainComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle(".au Direct Domain | Insights | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: '.au direct domain names, e.g., domain.au, getyour.au, etc. – are available as a new option for Internet users from March 2022.' },
        ]);
    }

    ngOnInit(): void {
    }

}
