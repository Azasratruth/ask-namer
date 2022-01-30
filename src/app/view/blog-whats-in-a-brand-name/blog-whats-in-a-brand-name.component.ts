import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-whats-in-a-brand-name',
    templateUrl: './blog-whats-in-a-brand-name.component.html',
    styleUrls: ['./blog-whats-in-a-brand-name.component.css']
})
export class BlogWhatsInABrandNameComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) {
        this.titleService.setTitle("What's in a brand name? | Brief Blogs | Ask Namer");
        this.metaTagService.addTags([
            { name: 'description', content: 'Brand names can be more than just unique and meaningful. There are different values/qualities that you can have in a brand name.' },
        ]);
    }

    ngOnInit(): void { }

}
