import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {
  
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faArrowAltCircleDown = faArrowAltCircleDown;
  faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

}
