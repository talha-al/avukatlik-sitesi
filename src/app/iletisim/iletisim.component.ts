import { Component } from '@angular/core';
import { LinkConstants } from '../menu-header/menu-header.component';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss'],
})
export class IletisimComponent {

  linkInstagram = LinkConstants.linkInstagram;
  linkFaceBook = LinkConstants.linkFaceBook;
  linkLinkedin = LinkConstants.linkLinkedin;
  linkTwitter = LinkConstants.linkTwitter;

  goToLink(link: string) {
    window.open(link);
  }
}
