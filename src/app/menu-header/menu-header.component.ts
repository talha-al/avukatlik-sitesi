import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {

  linkInstagram = LinkConstants.linkInstagram;
  linkFaceBook = LinkConstants.linkFaceBook;
  linkLinkedin = LinkConstants.linkLinkedin;
  linkTwitter = LinkConstants.linkTwitter;

  goToLink(link: string) {
    window.open(link);
  }
}


export enum LinkConstants {
  linkInstagram = "https://www.instagram.com/talhaalatas/",
  linkFaceBook = "https://www.facebook.com/talhaseref.alatas/",
  linkLinkedin = "https://www.linkedin.com/in/talhaalatas/",
  linkTwitter = "https://twitter.com/talhaalatass",
}
