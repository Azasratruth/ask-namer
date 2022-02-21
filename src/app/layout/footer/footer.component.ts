import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
// import { GsapService } from 'src/app/service/gsap.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public linkHoverOn(object) {
    gsap.to(object, {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 35,
      paddingRight: 35,
      backgroundColor: '#fff',
      color: '#000',
      duration: 0.3
    });
  }

  public linkHoverOff(object) {
    gsap.to(object, {
      padding: 0,
      color: '#fff',
      backgroundColor: 'inherit',
      duration: 0.3
    });
  }

}
