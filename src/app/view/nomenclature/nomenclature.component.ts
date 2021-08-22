import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-nomenclature',
    templateUrl: './nomenclature.component.html',
    styleUrls: ['./nomenclature.component.css']
})
export class NomenclatureComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) { }

    ngOnInit(): void {

        this.titleService.setTitle('Nomenclature | Ask Namer');
        this.metaTagService.updateTag(
            { name: 'description', content: '' }
        );

    }

}
