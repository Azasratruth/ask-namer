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
        this.titleService.setTitle("Renaming of Pak PMO’s YouTube channel to Imran Khan | Insights | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: "Recently, the YouTube channel of the Pakistan’s Prime Minister's Office (PMO) was renamed to Imran Khan..." },
        ]);
    }

    ngOnInit(): void {
    }

}
