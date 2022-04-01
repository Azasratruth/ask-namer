import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-i-cant-afford-a-naming-agency-and-want-a-name-quickly',
    templateUrl: './i-cant-afford-a-naming-agency-and-want-a-name-quickly.component.html',
    styleUrls: ['./i-cant-afford-a-naming-agency-and-want-a-name-quickly.component.css, ./../../blog-template.css']
})
export class ICantAffordANamingAgencyAndWantANameQuicklyComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle("I can’t afford a naming agency and want a name for my business quickly | Insights | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: "Simple answer – Name Generators" },
        ]);
    }

    ngOnInit(): void {
    }

}
