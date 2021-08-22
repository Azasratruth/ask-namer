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
    ) { }

    ngOnInit(): void {

        this.titleService.setTitle('Haecceity | Ask Namer');
        this.metaTagService.updateTag(
            { name: 'description', content: '' }
        );

    }

}
