import { AfterViewInit, Component, HostListener } from '@angular/core';

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
  isSmallScreen: boolean = false;
  menuToggle!: HTMLElement;
  menu!: HTMLElement;

  categories = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'aboutUs' },
    { name: 'Photos', id: 'photos' },
    { name: 'Contact', id: 'contact' },
  ];

  constructor(){
    if(window.screen.width < 600){
      this.isSmallScreen = true;
    }else{
      this.isSmallScreen=false;
    }
  }

  goToLink(link: string) {
    window.open(link);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.screen.width < 600) {
      this.isSmallScreen = true;

    } else {
      this.isSmallScreen = false;
    }
  }
}


export enum LinkConstants {
  linkInstagram = "https://www.instagram.com/talhaalatas/",
  linkFaceBook = "https://www.facebook.com/talhaseref.alatas/",
  linkLinkedin = "https://www.linkedin.com/in/talhaalatas/",
  linkTwitter = "https://twitter.com/talhaalatass",
}
