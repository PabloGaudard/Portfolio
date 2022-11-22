import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faArrowAltCircleDown = faArrowAltCircleDown;
  faArrowDown = faArrowDown;

}
