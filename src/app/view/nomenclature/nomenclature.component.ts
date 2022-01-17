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
    ) {
        this.titleService.setTitle('Nomenclature | The Art & Science of Naming | Ask Namer');
        this.metaTagService.addTags([
            { name: 'description', content: 'The Art & Science of Naming. Semantics, Auditory Perception, Premium Names. Domain, Registration, and Trademark Screening.' },
        ]);
    }

    ngOnInit(): void { }

}
