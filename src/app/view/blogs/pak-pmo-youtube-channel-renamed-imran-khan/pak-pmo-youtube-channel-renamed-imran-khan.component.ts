import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pak-pmo-youtube-channel-renamed-imran-khan',
    templateUrl: './pak-pmo-youtube-channel-renamed-imran-khan.component.html',
    styleUrls: ['./pak-pmo-youtube-channel-renamed-imran-khan.component.css, ./../../blog-template.css']
})
export class PakPmoYoutubeChannelRenamedImranKhanComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle("The Sound Of Success: How Brands Can Benefit From Phonetics | Insights | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: 'Research shows that brands labelled with proper phonetics are better perceived by 65%.' },
        ]);
    }

    ngOnInit(): void {
    }

}
