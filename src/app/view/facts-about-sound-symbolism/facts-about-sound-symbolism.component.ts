import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-facts-about-sound-symbolism',
    templateUrl: './facts-about-sound-symbolism.component.html',
    styleUrls: ['./facts-about-sound-symbolism.component.css, ./../../../blog.css']
})
export class FactsAboutSoundSymbolismComponent implements OnInit {

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
