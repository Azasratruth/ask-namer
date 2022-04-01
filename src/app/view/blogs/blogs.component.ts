import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import gsap from 'gsap';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle('Insights | Ask Namer');
        this.metaTagService.addTags([
            { name: 'description', content: "What's in a name? Facts About Brand Names. Power of Phonetics." },
        ]);
    }

    ngOnInit(): void { }

    public linkHoverOn(object) {
        gsap.to(object, {
            boxShadow: "0px 0px 10px 3px rgb(240, 240, 240)",
            duration: 0.3
        });
    }

    public linkHoverOff(object) {
        gsap.to(object, {
            boxShadow: "0px 0px 10px 3px rgb(16, 16, 16)",
            duration: 0.3
        });
    }

}
